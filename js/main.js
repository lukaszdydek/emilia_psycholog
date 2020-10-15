/*side-menu button action*/
const menu_button = document.querySelector('.menu__button');
const mobile_menu = document.querySelector('.mobile__menu');
const mobile_contact = document.querySelector('.mobile__contact');
const mobile_photo = document.querySelector('.mobile__photo');

menu_button.addEventListener('click', function() {
    mobile_menu.classList.toggle('mobile__menu--active');
    menu_button.classList.toggle('menu__button--clicked');
    mobile_contact.classList.toggle('mobile__contact--active');
    mobile_photo.classList.toggle('mobile__photo--active');
}
)

