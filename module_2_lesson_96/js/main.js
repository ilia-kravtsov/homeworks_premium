// ============================== burger menu start ================================
document.addEventListener('click', (e) => {
  
  const burgerIcon = e.target.closest('.burger-icon') // есть ли родитель
  const burgerNavLink = e.target.closest('.nav__link')
  
  if (!burgerIcon && !burgerNavLink) return;
  if (document.documentElement.clientWidth > 900) return
  
  if (document.body.classList.contains('page--opened-menu')) {
    document.body.classList.remove('page--opened-menu')
  } else {
    document.body.classList.add('page--opened-menu')
  }
})
// ============================== burger menu end ===================================


// ============================== lesson № 109 modal opened homework start ===========

function modalOpener(e) {
  e.preventDefault()
  document.body.classList.toggle('page--opened-modal')
}

// ______________________________ the first scenario________________________________

document.addEventListener('click', (e) => {

  const target = e.target

  const modalCLoseIcon = target.closest('.modal__close-button')
  const ideaImageLinkButton = target.closest('.idea__image-link-button')

  if (ideaImageLinkButton || modalCLoseIcon || target.classList.contains('modal')) modalOpener(e)
})

// ______________________________ the second scenario _______________________________

// const modalCLoseIcon = document.querySelector('.modal__close-button')
// const ideaImageLinkButton = document.querySelector('.idea__image-link-button')
//
// modalCLoseIcon.addEventListener('click',(e) => {
//   modalOpener(e)
// })
// ideaImageLinkButton.addEventListener('click',(e) => {
//   modalOpener(e)
// })
//
// document.addEventListener('click', (e) => {
//   e.target.classList.contains('modal') && modalOpener(e)
// })

// ______________________________ or the third one ____________________________________
// document.addEventListener('click', (e) => {
//   const target = e.target;
//   const modalCLoseIcon = target.closest('.modal__close-button')
//
//   if (target.matches('.idea__image-link-button') || modalCLoseIcon || target.classList.contains('modal')) modalOpener(e);
// });

// =============================== lesson № 109 modal opened homework end ===============



// =============================== lesson № 112 tabs start ================================

const tabControls = document.querySelector('.tab-controls')

tabControls.addEventListener('click', (e) => {
  e.preventDefault();
  const tabControl = e.target.closest('.tab-controls__link');
  
  if (!tabControl) return;
  if (tabControl.classList.contains('tab-controls__link--active')) return;
  
  const tabId = tabControl.getAttribute('href'); // tab1
  const tabContent = document.querySelector(tabId)
  const activeControl = document.querySelector('.tab-controls__link--active');
  const activeContent = document.querySelector('.tab-content--show')
  
  if (activeContent) {
    activeContent.classList.remove('tab-content--show');
  }
  if (activeControl) {
    activeControl.classList.remove('tab-controls__link--active');
  }
  
  tabControl.classList.add('tab-controls__link--active')
  tabContent.classList.add('tab-content--show');
  
});

// =============================== lesson № 114 Aккордеон ================================

const accordionLists = document.querySelectorAll('.accordion-list')

accordionLists.forEach(el => {
  const listItemOpened = document.querySelector('.accordion-list__item--opened .accordion-list__content');
  if (listItemOpened) {
    listItemOpened.style.maxHeight = listItemOpened.scrollHeight + 'px';
  }
  
  el.addEventListener('click', (e) => {
    e.preventDefault()
    const accordionControl = e.target.closest('.accordion-list__control');
    if(!accordionControl) return;
    
    const accordionItem = accordionControl.parentElement;
    const accordionContent = accordionControl.nextElementSibling;
    
    const accordionList = e.currentTarget;
    const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened');
    const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content');
    
    if (accordionOpenedItem && accordionItem !== accordionOpenedItem) {
      accordionOpenedItem.classList.remove('accordion-list__item--opened');
      accordionOpenedContent.style.maxHeight = null;
    }
    
    accordionItem.classList.toggle('accordion-list__item--opened');
    
    if (accordionItem.classList.contains('accordion-list__item--opened')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else {
      accordionContent.style.maxHeight = null;
    }
  });
});

// ============================== lesson № 119 swiper connecting ==============================

// swiper gallery
new Swiper('.main__gallery-swiper', {
  // loop: true,
  spaceBetween: 15, // px
  slidesPerView: 1.5,
  
  pagination: {
    el: '.main__gallery-pagination',
    type: 'fraction'
  },
  
  navigation: {
    nextEl: '.main__gallery-next',
    prevEl: '.main__gallery-prev',
  },
  
  breakpoints: {
    600: {
      slidesPerView: 3,
    },
    800: {
      spaceBetween: 32,
    },
    1101: {
      slidesPerView: 4,
    }
  }
  
});

// ============================== lesson № 121 swiper connecting ==============================

// swiper feedback
new Swiper('.feedback__swiper', {
  // loop: true,
  spaceBetween: 0, // px
  slidesPerView: 1,
  centeredSlides: true,
  
  navigation: {
    nextEl: '.feedback__next',
    prevEl: '.feedback__prev',
  },
  
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },
  
  breakpoints: {
    1201: {
      slidesPerView: 1.5,
    },
    900: {
      slidesPerView: 2.1,
    },
  }
});

// ============================== lesson № 124 phone mask ==============================

const phoneInputs = document.querySelectorAll('input[type="tel"]')
const im = new Inputmask('+7 (999) 999-99-99')
im.mask(phoneInputs)