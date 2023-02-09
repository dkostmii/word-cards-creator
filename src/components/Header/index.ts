import './index.sass';
import logoDarkData from '../../img/logo_dark.svg';

function Header() {
  const headerEl = document.createElement('header');

  const headerContainer = document.createElement('div');
  headerContainer.classList.add('header');

  headerEl.appendChild(headerContainer);

  const logoImage = document.createElement('img');
  logoImage.classList.add("header__logo");
  logoImage.src = logoDarkData;

  const caption = document.createElement('div');
  caption.classList.add("header__caption");

  caption.appendChild(document.createTextNode('Генератор карток'));

  headerContainer.append(logoImage, caption);

  return headerEl;
}

export default Header;