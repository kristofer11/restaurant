const contactPage = () => {
    const currentPage = document.querySelector('#currentPage');

    const title = document.createElement('h2');
    title.textContent = `Contact`;    
    currentPage.appendChild(title);
    title.style = 'color: red; font-size: 3rem'

    const description = document.createElement('p');
    description.textContent = `We would love to hear from you! Get ahold of us to inquire about catering, reservations or just to say hi!`;
    currentPage.appendChild(description);

    const phone = document.createElement('p');
    phone.textContent = 'Phone: 424-397-2901';
    currentPage.appendChild(phone);

    const email = document.createElement('p');
    email.textContent = 'Jimz@bigdaddyBBQ.art';
    currentPage.appendChild(email);

    const bbqImg = document.createElement('img')
    bbqImg.src = 'https://images.unsplash.com/photo-1551978027-76ccba5cf302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1047&q=80';
    currentPage.appendChild(bbqImg)
    bbqImg.style = 'width: 444px; aspect-ratio: 1/1'

}


export default contactPage;