// ________________________________ 1
function nameReturner(name) {
  return `Hello ${name}`
}

console.log(nameReturner('william'))

// ________________________________ 2
const numbersArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

function tenFilter(numbersArray) {
  for (const element of numbersArray) {
    if (element > 10) {
      console.log(element)
    }
  }
}

tenFilter(numbersArray)

// ________________________________ 3

function calculator(operand_1, operand_2, operator) {
  switch (operator) {
    case 'plus':
      return operand_1 + operand_2
    case 'minus':
      return operand_1 - operand_2
    case 'multiply':
      return operand_1 * operand_2
    case 'divide':
      return operand_1 / operand_2
    case 'degree':
      return operand_1 ** operand_2
    case 'remainder':
      return operand_1 % operand_2
    default:
      return 'your operator hasn\'t been added yet'
  }
}

const result = calculator(7,3, 'remainder')
console.log(result)

