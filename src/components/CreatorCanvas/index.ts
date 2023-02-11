import clamp from '../../functions/clamp';
import mapRanges from '../../functions/mapRanges';
import { CreatorFormData } from '../CreatorForm';
import CanvasImage from './canvasImage';

import './index.sass';
import watermarksDarkImageData from '../../img/watermarks_dark.svg';
import quizImageData from '../../img/logo_quiz.svg';


const fillColor = '#fff';
const accentColor = '#212ec9';

function CalcGap(originalWordFontSize: number, originalWordPosition: number, canvas: HTMLCanvasElement) {
  const baseline = originalWordFontSize / (0.056 * canvas.width);

  const min = 0.012 * canvas.width;
  const max = 0.05 * canvas.width;
  const value = 0.012 * canvas.width * baseline;

  return clamp(value, min, max) + originalWordFontSize + originalWordPosition;
}

function CalcFontSizes(data: CreatorFormData, canvas: HTMLCanvasElement) {
  const originalWordBaseline = mapRanges(
    data.originalWord.length,
    [ [0, 4], [5, 8], [9, 12], [13, 17], [18, 35], [36, 42], [43, 999999] ],
    [ 3.25, 2.25, 1.33, 1, 0.75, 0.5, 0.25 ],
  );

  const translatedWordBaseline = mapRanges(
    data.translatedWord.length,
    [ [0, 5], [6, 12], [13, 19], [20, 35], [36, 42], [43, 999999] ],
    [ 1.33, 0.825, 0.65, 0.33, 0.175, 0.1 ],
  );

  return {
    originalWordFontSize: originalWordBaseline * 0.056 * canvas.width,
    translatedWordFontSize: (originalWordBaseline * 0.33 + translatedWordBaseline * 0.66) * 0.056 * canvas.width,
  };
}

function hasImage(data: CreatorFormData) {
  return 'imageDataUrl' in data && typeof data.imageDataUrl === 'string' && data.imageDataUrl.length > 0;
}

function CreatorCanvas(initialData: CreatorFormData) {
  let formData = initialData;

  const creatorCanvasContainer = document.createElement('div');
  creatorCanvasContainer.classList.add('creator__canvas');

  const visibleCanvas = document.createElement("canvas");
  const visibleCtx = visibleCanvas.getContext("2d");
  visibleCanvas.width = 600;
  visibleCanvas.height = 600;

  // Offscreen layers
  const foregroundCanvas = document.createElement("canvas");
  const foregroundCtx = foregroundCanvas.getContext("2d");
  foregroundCanvas.width = visibleCanvas.width;
  foregroundCanvas.height = visibleCanvas.height;

  const imageCanvas = document.createElement("canvas");
  const imageCtx = imageCanvas.getContext("2d");
  imageCanvas.width = visibleCanvas.width;
  imageCanvas.height = visibleCanvas.height;

  visibleCanvas.addEventListener('resize', () => {
    foregroundCanvas.width = visibleCanvas.width;
    foregroundCanvas.height = visibleCanvas.height;
    imageCanvas.width = visibleCanvas.width;
    imageCanvas.height = visibleCanvas.height;
  });

  //creatorCanvasContainer.append(canvas, foregroundCanvas, imageCanvas);
  creatorCanvasContainer.appendChild(visibleCanvas);

  const watermarksDark = new Image();
  watermarksDark.src = watermarksDarkImageData;

  const logoQuiz = new Image();
  logoQuiz.src = quizImageData;

  const drawOnto = (sourceCanvas: HTMLCanvasElement, destCanvas: HTMLCanvasElement, destCanvasCtx: CanvasRenderingContext2D) => {
    destCanvasCtx.drawImage(sourceCanvas, 0, 0, destCanvas.width, destCanvas.height);
  }

  const clearCanvas = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const drawBackground = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.save();
    ctx.fillStyle = accentColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
  }

  const updateVisibleCanvas = () => {
    drawBackground(visibleCanvas, visibleCtx);
    drawOnto(imageCanvas, visibleCanvas, visibleCtx);
    drawOnto(foregroundCanvas, visibleCanvas, visibleCtx);
  };

  let image: CanvasImage = new CanvasImage();

  const drawImage = async (data: CreatorFormData, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): Promise<void> => {
    if (hasImage(data)) {
      await image.load(data.imageDataUrl)
      .then(() => {
        if (data.quiz) {
          image.blur = 15;
        } else {
          image.blur = 0;
        }
        image.draw(canvas, ctx, updateVisibleCanvas);
        image.setupMove(canvas, ctx, visibleCanvas, updateVisibleCanvas);
      });
    }
  };

  const drawForeground = (data: CreatorFormData, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    const { originalWordFontSize, translatedWordFontSize } = CalcFontSizes(data, canvas);
    const originalWordPosition = 0.2 * canvas.width;

    ctx.save();
    if (data.quiz) {
      ctx.drawImage(
        logoQuiz,
        0.135 * canvas.width,
        0.45 * canvas.height,
        2.15 * logoQuiz.width / 1000 * canvas.width,
        2.15 * logoQuiz.height / 1000 * canvas.height
      );
    }

    const highlightGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    highlightGradient.addColorStop(0, "#ffffffff");
    highlightGradient.addColorStop(0.5, "#ffffff8f");
    highlightGradient.addColorStop(1, '#ffffff00');

    ctx.fillStyle = highlightGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.globalCompositeOperation = 'multiply';
    ctx.fillStyle = "#212ec9bf";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = fillColor;

    ctx.textBaseline = 'top';
    
    ctx.font = `${originalWordFontSize}px Archivo`;
    ctx.fillText(data.originalWord, 0.15 * canvas.width, originalWordPosition);

    if (!data.quiz) {
      ctx.font = `italic ${translatedWordFontSize}px "Exo 2"`;
      ctx.fillText('– ' + data.translatedWord, 0.15 * canvas.width, CalcGap(originalWordFontSize, originalWordPosition, canvas));
    }

    ctx.drawImage(
      watermarksDark,
      0.15344 * canvas.width,
      0.799871 * canvas.height,
      canvas.width / 1000 * watermarksDark.width,
      canvas.height / 1000 * watermarksDark.height);

    ctx.restore();
  }

  const exportFinalDataUrl = (data: CreatorFormData) => {
    const exportCanvas = document.createElement("canvas");
    exportCanvas.width = 1024;
    exportCanvas.height = 1024;

    const exportCtx = exportCanvas.getContext("2d");

    drawBackground(exportCanvas, exportCtx);
    const prevBlurValue = image.blur;

    if (!data.quiz) {
      image.blur = 0;
    } else {
      image.blur = image.blur * exportCanvas.width / visibleCanvas.width;
    }
    image.draw(exportCanvas, exportCtx);
    image.blur = prevBlurValue;

    drawForeground(data, exportCanvas, exportCtx);

    return exportCanvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
  };

  const onWordsChanged = async (data: CreatorFormData) => {
    clearCanvas(foregroundCanvas, foregroundCtx);
    drawForeground(data, foregroundCanvas, foregroundCtx);
  };

  const onImageChanged = async (data: CreatorFormData) => {
    await drawImage(data, imageCanvas, imageCtx);
  };

  const update = (data: CreatorFormData, force: boolean = false) => {
    const operations: Promise<void>[] = [];
    if (
      force ||
      formData.originalWord !== data.originalWord ||
      formData.translatedWord !== data.translatedWord ||
      formData.quiz !== data.quiz) {
      operations.push(onWordsChanged(data));
    }

    if (hasImage(data)) {
      if (
        force ||
        !hasImage(formData) ||
        formData.imageDataUrl !== data.imageDataUrl ||
        formData.quiz !== data.quiz
        ) {
        operations.push(onImageChanged(data));
      }
    }

    if (operations.length > 0) {
      Promise.all(operations)
        .then(() => {
          updateVisibleCanvas();
        });
    }

    formData = data;
  };

  watermarksDark.onload = () => {
    update(formData, true);
  };

  // After loading fonts
  setTimeout(() => {
    update(formData, true);
  }, 2000);

  const save = () => {
    if (formData.originalWord.length < 1 || formData.translatedWord.length < 1)
      return;

    const imageDataUrl = exportFinalDataUrl(formData);

    const link = document.createElement('a');
    const wordEscaped = formData.originalWord.toLowerCase()
      .replace(/[^a-zäöüß ]/g, '')
      .replace("ä", "a")
      .replace("ö", 'o')
      .replace("ü", 'u')
      .replace("ß", 'ss');

    link.setAttribute('download', `${formData.quiz ? "Відгадайка" : "Картка"} ${wordEscaped}.png`);
    link.setAttribute('href', imageDataUrl);

    link.click();

    if (formData.quiz) {
      const originalData = { ...formData, quiz: false };
      const originalImageDataUrl = exportFinalDataUrl(originalData);
      
      link.setAttribute('download', `Картка ${wordEscaped}.png`);
      link.setAttribute('href', originalImageDataUrl);

      link.click();
    }
  };

  return {
    creatorCanvasContainer,
    update,
    save,
  };
}

export default CreatorCanvas;