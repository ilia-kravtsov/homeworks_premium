document.addEventListener('click', (e) => {
  
  const burgerIcon = e.target.closest('.burger-icon')
  const burgerNavLink = e.target.closest('.nav__link')
  
  if (!burgerIcon && !burgerNavLink) return;
  if (document.documentElement.clientWidth > 900) return
  
  if (document.body.classList.contains('page--opened-menu')) {
    document.body.classList.remove('page--opened-menu')
  } else {
    document.body.classList.add('page--opened-menu')
  }
})

// ______________________________ 109 modal opened homework ____________________________

function modalOpener(e) {
  e.preventDefault()
  document.body.classList.toggle('page--opened-modal')
}
// ______________________________ the first scenario____________________________

document.addEventListener('click', (e) => {

  const target = e.target

  const modalCLoseIcon = target.closest('.modal__close-button')
  const ideaImageLinkButton = target.closest('.idea__image-link-button')

  if (ideaImageLinkButton || modalCLoseIcon || target.classList.contains('modal')) modalOpener(e)
})

// ______________________________ the second scenario ____________________________

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

// ______________________________ or the third one ____________________________
// document.addEventListener('click', (e) => {
//   const target = e.target;
//   const modalCLoseIcon = target.closest('.modal__close-button')
//
//   if (target.matches('.idea__image-link-button') || modalCLoseIcon || target.classList.contains('modal')) modalOpener(e);
// });