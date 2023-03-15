const tab = (title) => {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = title;
    tab.setAttribute('id', `tab${title}`)
    return tab;
}

export default tab;