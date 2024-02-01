const button = document.querySelector('.btn')

let btnIsRed = false
button.addEventListener('click', () => {
  if (btnIsRed) {
    button.style.backgroundColor = 'lightgrey'
    btnIsRed = false
  } else {
    button.style.backgroundColor = 'rgba(16,16,16,0.4)'
    btnIsRed = true
  }
})

document.addEventListener('scroll', () => {
  console.log('scroll')
})

function scrolling() {
  console.log('scroll')
}

document.addEventListener('scroll', scrolling)


const form = document.getElementById('.myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращаем отправку формы по умолчанию
  const name = document.getElementById('nameInput').value;
  console.log('Submitted name:', name);
});