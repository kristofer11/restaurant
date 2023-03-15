import homePage  from './homePage.js';
console.log(homePage);
import navbar from './navbar';
import menuPage from './menuPage';
import contactPage from './contactPage'

navbar();

const currentPage = document.createElement('div');
currentPage.setAttribute('id', 'currentPage')
const content = document.querySelector('#content');
content.appendChild(currentPage);

homePage();

const renderPage = (page) => {
    return page();
}

const tabHome = document.querySelector('#tabHome');
tabHome.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage.innerHTML = '';
    renderPage(homePage)
});

const tabMenu = document.querySelector('#tabMenu');
tabMenu.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage.innerHTML = '';
    renderPage(menuPage)
});

const tabContact = document.querySelector('#tabContact');
tabContact.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage.innerHTML = '';
    renderPage(contactPage)
});



// homePage();
// menuPage();
// contactPage();