import './index.sass';

export interface CreatorFormData {
  originalWord: string,
  translatedWord: string,
  imageDataUrl?: string,
};

const maxFileSizeMb = 10;
const maxLargestSide = 4096;

async function readImageFile(imageFile: File): Promise<string> {
  return new Promise((res, rej) => {
    if (imageFile.size > 1048576 * maxFileSizeMb) {
      return rej("MAXFILESIZE");
    }
  
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
  
    reader.addEventListener('loadend', () => {
      if (typeof reader.result !== 'string') {
        return rej("UNKNOWNERR");
      }

      const img = new Image();
      img.src = reader.result as string;
      img.onload = () => {
        if (img.width > maxLargestSide || img.height > maxLargestSide) {
          return rej("LARGESTSIDE");
        }

        return res(reader.result as string);
      }
    });
  });
}

function preCheckInput(input: HTMLInputElement) {
  if (input.type === 'text') {
    input.value = input.value
      .trim()
      .replace(/[^A-Za-zÄÖÜäöüß0-9А-Яа-яїґєіЇҐЄІ \.\-]/g, '');
  }
}

function CreatorForm(
  initialFormData: CreatorFormData,
  onChange?: (data: CreatorFormData) => void) {

    let formData = initialFormData;

  const creatorFormContainer = document.createElement('div');
  creatorFormContainer.classList.add('creator__form');

  const wordInputLabel = document.createElement('label');
  wordInputLabel.innerHTML = '<span>Слово німецькою</span>';
  wordInputLabel.classList.add('input', 'input__word', 'input__word__original');

  const wordInput = document.createElement('input');
  wordInput.type = 'text';
  wordInput.value = formData.originalWord;
  wordInputLabel.appendChild(wordInput);

  const translatedWordInputLabel = document.createElement('label');

  translatedWordInputLabel.innerHTML = '<span>Переклад</span>';
  translatedWordInputLabel.classList.add('input', 'input__word', 'input__word__translated');

  const translatedWordInput = document.createElement('input');
  translatedWordInput.type = 'text';
  translatedWordInput.value = formData.translatedWord;

  translatedWordInputLabel.appendChild(translatedWordInput);

  const fileInputLabel = document.createElement('label');
  fileInputLabel.innerHTML = '<span>Картинка</span>';
  const fileInputLabelCaption = fileInputLabel.querySelector('span');
  fileInputLabel.classList.add('input', 'input__file');

  const fileInputButton = document.createElement('button');
  fileInputButton.classList.add('button', 'input__file__button');
  fileInputButton.innerHTML = 'Оберіть картинку';

  fileInputLabel.appendChild(fileInputButton);

  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'image/png,image/jpeg';

  fileInput.addEventListener('change', () => {
    fileInputLabelCaption.innerHTML = 'Картинка';

    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      fileInputButton.innerHTML = fileInput.value.split(/(\\|\/)/g).pop();
      fileInputButton.classList.add('button__alt');

      readImageFile(file)
      .catch(err => {
        if (err === 'MAXFILESIZE') {
          fileInputLabelCaption.innerHTML = `Максимальний розмір картинки ${maxFileSizeMb} Мб`;
        } else if (err === 'LARGESTSIDE') {
          fileInputLabelCaption.innerHTML = `Картинка завелика.<br>Спробуй змешити картинку до ${maxLargestSide} пікселів у найбільшій стороні.`;
        } else {
          fileInputLabelCaption.innerHTML = `Виникла помилка при завантаженні.<br>Спробуй ще раз.`;
        }

        return '';
      })
      .then(dataUrl => {
        if (dataUrl) {
          formData = { ...formData, imageDataUrl: dataUrl };
          onChange(formData);
        }
      });
    } else {
      fileInputButton.innerHTML = 'Оберіть картинку';
      fileInputButton.classList.remove('button__alt');
    }
  });

  fileInputButton.addEventListener('click', () => {
    fileInput.click();
  });

  creatorFormContainer.append(wordInputLabel, translatedWordInputLabel, fileInputLabel);

  if (onChange instanceof Function) {
    wordInput.addEventListener('change', () => {
      preCheckInput(wordInput);
      formData = { ...formData, originalWord: wordInput.value };
      onChange(formData);
    });
    translatedWordInput.addEventListener('change', () => {
      preCheckInput(translatedWordInput);
      formData = { ...formData, translatedWord: translatedWordInput.value };
      onChange(formData);
    });
  }

  return creatorFormContainer;
}

export default CreatorForm;
