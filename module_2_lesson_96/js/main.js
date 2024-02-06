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