const btn = document.querySelector('.page__btn')
const text = document.querySelector('.page__text')

// btn.addEventListener('click', () => {
//   text.classList.add('red')
// })

// btn.addEventListener('click', () => {
//   text.classList.toggle('move')
//   text.classList.remove('red')
// })

btn.addEventListener('click', () => {
  text.classList.toggle('move')
  if (text.classList.contains('move')) {
    text.textContent = 'двигается'
  } else {
    text.innerText = 'text'
  }
  
})