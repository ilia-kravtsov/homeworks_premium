function firstWithoutConditional() {
  console.log('Task_1_without_conditional:')
  for (let i = 2; i <= 12; i = i + 2) {
    console.log(i)
  }
}

function firstWithConditional() {
  console.log('Task_1_with_conditional:')
  for (let i = 2; i <= 12; i++) {
    if(i % 2 === 0) {
      console.log(i)
    }
  }
}

function second() {
  console.log('Task_2:')
  for (let i = 10; i >= 1; i--) {
    console.log(i)
  }
}

const third_1 = () => {
  console.log('Task_3_1:')
  let i = 2;
  while (i <= 12) {
    console.log(i)
    // i = i + 2 or...
    i++
    i++ // :)
  }
}

const third_2 = () => {
  console.log('Task_3_2:')
  let i = 10;
  while (i >= 1) {
    console.log(i)
    // i = i + 2
    i--
  }
}

// for console:

// 1
// firstWithoutConditional()
// setTimeout(firstWithConditional, 100)
// setTimeout(second, 100)
// setTimeout(third_1, 100)
// setTimeout(third_2, 100)

// 2
const array = [firstWithoutConditional, firstWithConditional, second, third_1, third_2]
array.forEach(cycleFunction => cycleFunction())