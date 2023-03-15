import tab from './tab';

const navbar = () => {
    const content = document.querySelector('#content');
    const header = document.createElement('div');
    const logo = document.createElement('h1');
    logo.textContent = 'BD'
    logo.classList.add('logo');
    header.appendChild(logo);
    header.classList.add('header')
    const navContainer = document.createElement('div');
    navContainer.classList.add('navContainer');
    navContainer.appendChild(tab('Contact'));    
    navContainer.appendChild(tab('Menu'));
    navContainer.appendChild(tab('Home'));
    header.appendChild(navContainer)
    
    content.appendChild(header);
};

export default navbar;