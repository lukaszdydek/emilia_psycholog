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

/*cta button href attribute change based on window width*/

const cta_button = document.querySelector(".cta__button");

if (window.innerWidth < 768) {
  cta_button.setAttribute("href", "tel:509105711");
}