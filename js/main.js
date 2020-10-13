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

/*collapsible containers*/

const collapsible_button = document.querySelectorAll('.collapsible__button');
const collapsible_content = document.querySelectorAll('.collapsible__content');

for (i = 0; i < collapsible_button.length; i++) {
    collapsible_button[i].addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        content.classList.toggle('collapsible__content--active');
     
        if (content.style.maxHeight){
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
          }
        }

    )
}

