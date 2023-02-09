import './index.sass';

import CreatorCanvas from '../CreatorCanvas';
import CreatorForm from '../CreatorForm';
import { CreatorFormData } from '../CreatorForm';


function Creator() {
  const creatorContainer = document.createElement('div');
  creatorContainer.classList.add('creator');

  let creatorFormData: CreatorFormData = {
    originalWord: "Das Wort",
    translatedWord: "слово"
  }

  const { creatorCanvasContainer, update: updateCanvas, save } = CreatorCanvas(creatorFormData);
  
  const saveButton = document.createElement('button');
  saveButton.innerHTML = 'Зберегти картку';
  saveButton.addEventListener('click', save);
  saveButton.classList.add('button', 'button__save');

  const creatorFormChanged = (data: CreatorFormData) => {
    creatorFormData = data;
    updateCanvas(data);

    if (data.originalWord.length < 1 || data.translatedWord.length < 1) {
      saveButton.innerHTML = 'Заповніть картку, щоб зберегти';
      saveButton.setAttribute('disabled', '');
    } else {
      saveButton.innerHTML = 'Зберегти картку';
      saveButton.removeAttribute('disabled');
    }
  };
  
  creatorContainer.appendChild(CreatorForm(creatorFormData, creatorFormChanged));
  creatorContainer.appendChild(creatorCanvasContainer);
  creatorContainer.appendChild(saveButton);

  return creatorContainer;
}

export default Creator;