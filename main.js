AOS.init();



let btn = document.querySelector(`.burger-btn`);

const burgerFunc = (menuClassName, showClassName) =>{
    let menu = document.querySelector(`.${menuClassName}`);
    let header = document.querySelector(".header");
    if(menu.className.includes(showClassName)){
        menu.className = menuClassName;
        header.className = 'header';
    } else{
        menu.className += ` ${showClassName}`;
        header.className += ' header-show'
    }

};

btn.addEventListener("click", ()=>{
    burgerFunc('header__menu', 'header__menu-show')
});

let linkList = document.querySelectorAll('.header__menu-li');

linkList.forEach(item =>{
    item.addEventListener("click", ()=>{
        burgerFunc('header__menu', 'header__menu-show')
    });
});
