const menuPage = () => {
    const currentPage = document.querySelector('#currentPage');

    const title = document.createElement('h2');
    title.textContent = `Menu`;    
    title.classList.add('pageTitle')  
    currentPage.appendChild(title);

    const description = document.createElement('p');
    description.textContent = `Here is our menu. It doesn't make much sense, but that's the beauty of it!`
    currentPage.appendChild(description)

    const menu = document.createElement('ul');
    const item1 = document.createElement('li');
    item1.textContent = 'Brisket...yum! (14.99)'
    menu.appendChild(item1);
    const item2 = document.createElement('li');
    item2.textContent = 'Pulled Pork...yay! (12.99)'
    menu.appendChild(item2);
    const item3 = document.createElement('li');
    item3.textContent = 'Corn Bread...golly! (3.50)'
    menu.appendChild(item3);
    currentPage.appendChild(menu);

    const bbqImg = document.createElement('img')
    bbqImg.src = 'https://images.unsplash.com/photo-1523986490752-c28064f26be3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80';
    currentPage.appendChild(bbqImg)
    bbqImg.style = 'width: 444px; aspect-ratio: 1/1'

}

export default menuPage;