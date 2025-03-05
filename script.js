// toggle icon navbar

// scroll section
window.onscroll = () => {
    //sticky header
    let header = document.querySelector('header');
    
    header.classList.toggle('sticky', window.scrolly > 100);
}

