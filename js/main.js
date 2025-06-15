const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list')

menuBtn.addEventListener('click', ()=>{
    menu.classList.toggle('menu--active');
})


const ContactBtn = document.querySelector('.header__contacts');
const modalContact = document.querySelector('.contact__modal')
const ModalContactClose = document.querySelector('.contact__modal-close')



ContactBtn.addEventListener('click', ()=> {
    modalContact.classList.add('contact--active');
})

ModalContactClose.addEventListener('click', (e) => {
    e.stopPropagation();
    modalContact.classList.remove('contact--active'); 
});


document.getElementById('target').scrollIntoView({ behavior: 'smooth' });


document.querySelectorAll('.menu__link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); 

    const targetId = link.getAttribute('href'); 
    const targetElement = document.querySelector(targetId); 
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start' 
      });
    }
  });
});

