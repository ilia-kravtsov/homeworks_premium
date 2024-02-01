// const btns = document.querySelectorAll('.btns__btn')
//
// btns.forEach((btn, index) => {
//   btn.addEventListener('click', () => {
//     console.log(index + 1)
//   })
// })

const btn = document.querySelector('.btns__btn')

btn.addEventListener('click', event => {
  event.target.classList.toggle('red')
}) // на какой элемент кликаем на том и работает

// если при клике на дочерний элемент хотим активировать еще и слушатель событий который висит на родителе то тогда
// currentTarget
// при currentTarget сработает и 1 и 2 при target только 1 или 2

