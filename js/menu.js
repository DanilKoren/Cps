
let menuOpen = document.querySelector('.page-header__menu-toggle');
let menu = document.querySelector('.main-nav');
let menuClose = menu.querySelector('.main-nav__close');
let wrapper = document.querySelector('.wrapper');

export let openMenu = function () {

  menuOpen.addEventListener('click', function (evt){
    evt.preventDefault();
    menu.classList.add('main-nav--open');
    wrapper.classList.add('filter');

  })

  menuClose.addEventListener('click', function (){
    menu.classList.remove('main-nav--open');
    wrapper.classList.remove('filter');
  })

}


