const homePage = () => {
    const currentPage = document.querySelector('#currentPage');

    const title = document.createElement('h2');
    title.textContent = `Big Daddy's BBQ!`;  
    title.classList.add('pageTitle')    
    currentPage.appendChild(title);

    const description = document.createElement('p');
    description.textContent = `Holy cow, this BBQ is good. Don't take our word for it, check out the reviews on our About Page.`
    currentPage.appendChild(description)

    const bbqImg = document.createElement('img')
    bbqImg.src = 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80';
    currentPage.appendChild(bbqImg)
    bbqImg.style = 'width: 444px; aspect-ratio: 1/1'

}


export default homePage;


