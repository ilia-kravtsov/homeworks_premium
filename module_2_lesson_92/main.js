const button = document.querySelector('.buttons__button')
const modal = document.querySelector('.modal')
const body = document.body

const addVisibility = () => {
  modal.classList.add('--invisibility')
  body.classList.remove('body--fixed')
}
button.addEventListener('click', event => {
    modal.classList.remove('--invisibility')
    body.classList.add('body--fixed')
})
modal.addEventListener('click', (event) => {
  const target = event.target
  if (target && target.classList.contains('modal') || target.classList.contains('modal__close-button')) {
    addVisibility()
  }
})

document.addEventListener('keydown', (event) => {
  if (event.code === 'Escape' && !modal.classList.contains('--invisibility')) {
    addVisibility()
  }
})