const menuSlide = () => {
    const icon = document.querySelector('.menu-icon');
    const nav = document.querySelector('.nav');
    const links = document.querySelectorAll('.nav li')
    //show nav element
    icon.addEventListener('click', () => {
        //animation nav 
        nav.classList.toggle('header-active');
        //animation menu-list
        links.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = "";
            }else {
                link.style.animation = `menuLink 0.5s ease forwards ${index/7 + 0.5}s`;
            }
        });
        //animation menu-icon
        icon.classList.toggle('toggle');  
    });    
} 
menuSlide();