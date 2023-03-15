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

//When called (by clicking a tab), displays the proper page.
const renderPage = (page) => {
    return page();
}

const tabHome = document.querySelector('#tabHome');
tabHome.setAttribute('id', 'tabActiveInitial');
tabHome.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage.innerHTML = '';
    renderPage(homePage);
    tabHome.setAttribute('id', 'tabActive');
    tabContact.removeAttribute('id', 'tabActive');
    tabMenu.removeAttribute('id', 'tabActive');
});

const tabMenu = document.querySelector('#tabMenu');
tabMenu.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage.innerHTML = '';
    renderPage(menuPage);
    tabMenu.setAttribute('id', 'tabActive');
    tabHome.removeAttribute('id', 'tabActive');
    tabContact.removeAttribute('id', 'tabActive');
});

const tabContact = document.querySelector('#tabContact');
tabContact.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage.innerHTML = '';
    renderPage(contactPage);
    tabMenu.removeAttribute('id', 'tabActive');
    tabHome.removeAttribute('id', 'tabActive');
    tabContact.setAttribute('id', 'tabActive');
});



// homePage();
// menuPage();
// contactPage();