/*image relocation*/
const sections = document.querySelectorAll('.section');
const rel_image = document.querySelector('.section__image2');

if (window.innerWidth < 768) {
  sections[1].insertAdjacentElement('afterbegin', rel_image);
  
}

/*cta button*/

const cta_button = document.querySelector(".cta__button");

if (window.innerWidth < 768) {
  cta_button.setAttribute("href", "tel:509105711");
}