import './style.css';
import {createInterface} from './initialize.js';
import {createMenu} from './menu.js';
import { createContact } from './contact.js';
import { createAbout } from './about.js';


const buttonHome = document.getElementById("home");
buttonHome.addEventListener('click', () => {
    createInterface();
})

const buttonMenu = document.getElementById("menu");
buttonMenu.addEventListener('click', () => {
    createMenu();
})

const buttonContact = document.getElementById("contact");
buttonContact.addEventListener('click', () => {
    createContact();
})

const buttonAbout = document.getElementById("about");
buttonAbout.addEventListener('click', () => {
    createAbout();
})

createInterface();

