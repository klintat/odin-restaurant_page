import { home } from './pages/home';
import { menu } from './pages/menu';
import { about } from './pages/about';
import { contact } from './pages/contact';
import '../src/style.css'

home();

const homeBtn = document.getElementById("btn-home");
const menuBtn = document.getElementById("btn-menu");
const aboutBtn = document.getElementById("btn-about");
const contactBtn = document.getElementById("btn-contact");

const pageSwitch = (pageFunc) => {
    const content = document.getElementById("content");
    while(content.firstChild) {
        content.removeChild(content.lastChild);
    }
    pageFunc();
}

homeBtn.addEventListener('click', () => {
    pageSwitch(home);
});
  
menuBtn.addEventListener('click', () => {
    pageSwitch(menu);
});
  
aboutBtn.addEventListener('click', () => {
    pageSwitch(about);
});

contactBtn.addEventListener('click', () => {
    pageSwitch(contact);
});

export { pageSwitch };