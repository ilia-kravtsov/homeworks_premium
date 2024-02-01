// плохо
// const btns = document.querySelectorAll('.buttons__button')
//
// btns.forEach(button => {
//   button.addEventListener('click', () => {
//     console.log(button.textContent)
//   })
// })

// делегирование событий

// const buttons = document.querySelector('.buttons')
//
// buttons.addEventListener('click', (event) => {
//   // проверяем является ли элемент по которому кликнули кнопкой
//   if (event.target && event.target.tagName === 'BUTTON') {
//     // выводим в консоль text элемента
//     console.log(event.target.textContent)
//   }
// })

// если хотим чтобы обработчик сработал на элементы с одним классом то

const buttons = document.querySelector('.buttons')

buttons.addEventListener('click', (event) => {
  const target =  event.target
  // проверяем является ли элемент по которому кликнули кнопкой
  if (target && target.classList.contains('buttons_button')) {
    // contains возвращает на true или false в зависимости от того
    // есть ли такой класс на элементе или нет
    // выводим в консоль text элемента
    console.log(target.textContent)
  }
})