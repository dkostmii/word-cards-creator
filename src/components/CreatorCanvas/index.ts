import clamp from '../../functions/clamp';
import { CreatorFormData } from '../CreatorForm';

import './index.sass';
import watermarksDarkImageData from '../../img/watermarks_dark.svg';


const fillColor = '#fff';
const accentColor = '#212ec9';

function CalcGap(originalWordFontSize: number, originalWordPosition: number) {
  const baseline = originalWordFontSize / 56;

  return clamp(12 * baseline, 12, 50) + originalWordFontSize + originalWordPosition;
}

function CalcFontSizes(data: CreatorFormData) {
  const originalWordBaseline = clamp(12 / data.originalWord.length, 0.45, 4);
  const translatedWordBaseline = clamp(8 / data.translatedWord.length, 0.45, 4);

  return {
    originalWordFontSize: originalWordBaseline * 56,
    translatedWordFontSize: originalWordBaseline * 32 + translatedWordBaseline * 12,
  };
}

function CreatorCanvas(initialData: CreatorFormData) {
  let formData = initialData;

  const creatorCanvasContainer = document.createElement('div');
  creatorCanvasContainer.classList.add('creator__canvas');

  const bufferCanvas = document.createElement("canvas");
  bufferCanvas.width = 1000;
  bufferCanvas.height = 1000;

  const canvas = document.createElement("canvas");
  canvas.width = 600;
  canvas.height = 600;
  const ctx = canvas.getContext("2d");

  let { originalWordFontSize, translatedWordFontSize } = CalcFontSizes(initialData);
  const originalWordPosition = 200;

  creatorCanvasContainer.appendChild(canvas);

  const bufferCtx = bufferCanvas.getContext("2d");
  const watermarksDark = new Image();
  watermarksDark.src = watermarksDarkImageData;

  const drawWatermarks = () => {
    bufferCtx.drawImage(watermarksDark, 153.440, 799.871);
  }

  const updateVisibleCanvas = () => {
    const bufferImageDataUrl = bufferCanvas.toDataURL('image/png');
    const bufferImg = new Image();
    bufferImg.src = bufferImageDataUrl;

    bufferImg.onload = () => {
      ctx.drawImage(bufferImg, 0, 0, canvas.width, canvas.height);
    }
  }

  const drawForeground = (data: CreatorFormData) => {
    const highlightGradient = bufferCtx.createLinearGradient(0, 0, 0, bufferCanvas.height);
    highlightGradient.addColorStop(0, "#ffffffff");
    highlightGradient.addColorStop(0.5, "#ffffff8f");
    highlightGradient.addColorStop(1, '#ffffff00');

    bufferCtx.fillStyle = highlightGradient;
    bufferCtx.fillRect(0, 0, bufferCanvas.width, bufferCanvas.height);
    
    bufferCtx.globalCompositeOperation = 'multiply';
    bufferCtx.fillStyle = "#212ec9bf";
    bufferCtx.fillRect(0, 0, bufferCanvas.width, bufferCanvas.height);
    
    bufferCtx.globalCompositeOperation = 'source-over';
    bufferCtx.fillStyle = fillColor;

    bufferCtx.textBaseline = 'top';
    
    bufferCtx.font = `${originalWordFontSize}px Archivo`;

    bufferCtx.fillText(data.originalWord, 150, originalWordPosition);

    bufferCtx.font = `italic ${translatedWordFontSize}px "Exo 2"`;

    bufferCtx.fillText('– ' + data.translatedWord, 150, CalcGap(originalWordFontSize, originalWordPosition));

    drawWatermarks();
    updateVisibleCanvas();
  }

  const update = (data: CreatorFormData) => {
    formData = data;

    const newFontSizes = CalcFontSizes(data);
    originalWordFontSize = newFontSizes.originalWordFontSize;
    translatedWordFontSize = newFontSizes.translatedWordFontSize;

    bufferCtx.fillStyle = accentColor;
    bufferCtx.fillRect(0, 0, bufferCanvas.width, bufferCanvas.height);
    
    // TODO: Add image provided by user here
    if ('imageDataUrl' in data && typeof data.imageDataUrl === 'string' && data.imageDataUrl.length > 0) {
      const image = new Image();
      image.src = data.imageDataUrl;
      image.onload = () => {
        const aspectRatio = image.width / image.height;
        if (aspectRatio < 1) {
          // Portrait
          const resiprocalAspect = 1 / aspectRatio;
          const projectedHeight = bufferCanvas.width * resiprocalAspect;
          const offsetY = -1 * (projectedHeight - bufferCanvas.height) / 2;

          bufferCtx.drawImage(image, 0, offsetY, bufferCanvas.width, projectedHeight);
        } else if (aspectRatio >= 1) {
          // Landscape
          const projectedWidth = bufferCanvas.height * aspectRatio;
          const offsetX = -1 * (projectedWidth - bufferCanvas.width) / 2;

          bufferCtx.drawImage(image, offsetX, 0, projectedWidth, bufferCanvas.height);
        }

        drawForeground(data);
      }
    } else {
      drawForeground(data);
    }
  };
  
  let smallMatches: boolean = false;
  let bigMatches: boolean = false;

  const resizeSmall = (matches: boolean) => {
    if (bigMatches) {
      return;
    }

    if (matches) {
      canvas.width = 400;
      canvas.height = 400;
    } else {
      canvas.width = 296;
      canvas.height = 296;
    }
    updateVisibleCanvas();
  }

  const resizeBig = (matches: boolean) => {
    if (smallMatches) {
      return;
    }

    if (matches) {
      canvas.width = 400;
      canvas.height = 400;
    } else {
      canvas.width = 600;
      canvas.height = 600;
    }
    updateVisibleCanvas();
  }


  const bigMqResult = window.matchMedia('(min-width: 1200px)');
  bigMatches = bigMqResult.matches;
  resizeBig(bigMatches);
  
  bigMqResult.addEventListener('change', e => {
    bigMatches = e.matches;
    resizeBig(bigMatches);
  });

  const smallMqResult = window.matchMedia('(min-width: 600px)');
  smallMatches = smallMqResult.matches;
  resizeSmall(smallMatches);
  
  smallMqResult.addEventListener('change', e => {
    smallMatches = e.matches;
    resizeSmall(smallMatches);
  });

  watermarksDark.onload = () => {
    update(initialData);
  };

  // After loading fonts
  setTimeout(() => {
    update(initialData);
  }, 2000);

  const save = () => {
    if (formData.originalWord.length < 1 || formData.translatedWord.length < 1)
      return;

    const imageDataUrl = bufferCanvas.toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    const link = document.createElement('a');
    const wordEscaped = formData.originalWord.toLowerCase()
      .replace(/[^a-zäöüß ]/g, '')
      .replace("ä", "a")
      .replace("ö", 'o')
      .replace("ü", 'u')
      .replace("ß", 'ss');

    link.setAttribute('download', `Картка ${wordEscaped}.png`);
    link.setAttribute('href', imageDataUrl);

    link.click();
  }

  return {
    creatorCanvasContainer,
    update,
    save,
  };
}

export default CreatorCanvas;