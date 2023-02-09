import './index.sass';
import Header from './components/Header';
import Creator from './components/Creator';

const root = document.getElementById("root");

root.appendChild(Header());
root.appendChild(Creator());
