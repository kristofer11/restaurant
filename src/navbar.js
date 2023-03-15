import tab from './tab';

const navbar = () => {
    const content = document.querySelector('#content')
    const navContainer = document.createElement('div');
    navContainer.classList.add('navContainer');
    navContainer.appendChild(tab('Contact'));    
    navContainer.appendChild(tab('Menu'));
    navContainer.appendChild(tab('Home'));    
    
    content.appendChild(navContainer);
};

export default navbar;