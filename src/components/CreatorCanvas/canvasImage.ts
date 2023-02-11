import map from '../../functions/map';
import clamp from '../../functions/clamp';

class CanvasImage {
  private image?: HTMLImageElement;

  private offsetX: number;
  private offsetY: number;
  private offsetClampX: number;
  private offsetClampY: number;
  
  private canMove: boolean;
  private moving: boolean;

  public blur: number;

  constructor() {
    this.offsetX = 0;
    this.offsetY = 0;
    this.offsetClampX = 0;
    this.offsetClampY = 0;
    this.blur = 0;
  }

  async load(imageDataUrl: string): Promise<void> {
    return new Promise((res, rej) => {
      if (imageDataUrl.length < 1) {
        rej('Expected imageDataUrl to be non-empty');
      }

      this.image = new Image();
      this.image.src = imageDataUrl!;
      this.image.onload = () => {
        const aspectRatio = this.image!.width / this.image!.height;

        if (aspectRatio < 1) {
          this.canMove = true;
        } else if (aspectRatio > 1) {
          this.canMove = true;
        } else {
          this.canMove = false;
        }

        this.offsetX = 0;
        this.offsetY = 0;
        this.offsetClampX = 0;
        this.offsetClampY = 0;

        res();
      };

      this.image.onerror = () => {
        rej();
      };
    });
  }

  draw(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, afterDraw?: () => void) {
    if (!this.image) {
      throw new Error('Expected image to be loaded.');
    }

    const aspectRatio = this.image.width / this.image.height;
    let projectedWidth = canvas.width;
    let projectedHeight = canvas.height;
    let centerOffsetX = 0;
    let centerOffsetY = 0;

    if (aspectRatio < 1) {
      projectedHeight = canvas.width / aspectRatio;
      centerOffsetY = (projectedHeight - canvas.height) / (-2 * canvas.height);
      this.offsetClampY = -1 * centerOffsetY;

    } else if (aspectRatio > 1) {
      projectedWidth = canvas.height * aspectRatio;
      centerOffsetX = (projectedWidth - canvas.width) / (-2 * canvas.width);
      this.offsetClampX = -1 * centerOffsetX;
    }

    centerOffsetX += this.offsetX;
    centerOffsetY += this.offsetY;

    ctx.save();
    if (this.blur > 0) {
      ctx.filter = `blur(${clamp(this.blur, 0, 150)}px)`;
    } else {
      ctx.filter = '';
    }
    ctx.drawImage(this.image, centerOffsetX * canvas.width, centerOffsetY * canvas.height, projectedWidth, projectedHeight);
    ctx.restore();

    if (afterDraw instanceof Function) {
      afterDraw();
    }
  }

  setupMove(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    visibleCanvas: HTMLCanvasElement,
    afterMove?: () => void) {
    if (!this.canMove) {
      return;
    }

    visibleCanvas.style.setProperty('cursor', 'grab');

    const blurValue: number = this.blur;

    const onMouseDown = () => {
      this.moving = true;
      visibleCanvas.style.setProperty('cursor', 'grabbing');
      this.blur = 0;
    };
    
    const moveImage = (dx: number, dy: number) => {
      dx = map(dx, -1, 1, -1 * this.offsetClampX, this.offsetClampX, true);
      dy = map(dy, -1, 1, -1 * this.offsetClampY, this.offsetClampY, true);

      this.offsetX = clamp(this.offsetX + dx, -1 * this.offsetClampX, this.offsetClampX);
      this.offsetY = clamp(this.offsetY + dy, -1 * this.offsetClampY, this.offsetClampY);

      this.draw(canvas, ctx, afterMove);
    };

    const onMouseUp = () => {
      this.moving = false;
      visibleCanvas.style.setProperty('cursor', 'grab');
      this.blur = blurValue;
      moveImage(0, 0);
    };
    
    visibleCanvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    window.addEventListener('mousemove', e => {
      if (this.moving) {
        const dx = map(e.movementX, -1 * visibleCanvas.width / 2, visibleCanvas.width / 2, -1, 1, true);
        const dy = map(e.movementY, -1 * visibleCanvas.height / 2, visibleCanvas.height / 2, -1, 1, true);

        moveImage(dx, dy);
      }
    });

    // Touch handlers

    let prevTouchX: number | null = null;
    let prevTouchY: number | null = null;

    visibleCanvas.addEventListener('touchstart', e => {
      prevTouchX = e.touches[0].clientX;
      prevTouchY = e.touches[0].clientY;
      this.blur = 0;
    }, { passive: true });

    visibleCanvas.addEventListener('touchend', () => {
      prevTouchX = null;
      prevTouchY = null;
      this.blur = blurValue;
      moveImage(0, 0);
    }, { passive: true });

    visibleCanvas.addEventListener('touchmove', e => {
      const touchX = e.touches[0].clientX;
      const touchY = e.touches[0].clientY;

      if (prevTouchX === null && prevTouchY === null) {
        return;
      }

      const touchDx = touchX - prevTouchX!;
      const touchDy = touchY - prevTouchY!;
      
      const dx = map(touchDx, -1 * visibleCanvas.width / 2, visibleCanvas.width / 2, -0.33, 0.33, true);
      const dy = map(touchDy, -1 * visibleCanvas.height / 2, visibleCanvas.height / 2, -0.33, 0.33, true);

      moveImage(dx, dy);
    }, { passive: true });
  }
}

export default CanvasImage;