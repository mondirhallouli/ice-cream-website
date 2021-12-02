const closeMenu = document.querySelector('.close-btn');
const mobileMenu = document.querySelector('.mobile-menu');
closeMenu.addEventLisetener('click', (e)=>{
    e.stopPropagation();
    console.log('close clicked');
    mobileMenu.style.right = "200%";
});

//# sourceMappingURL=index.7eb54beb.js.map
