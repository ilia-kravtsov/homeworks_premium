//___________________________ 1

const numbers = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i])
  }
}

//___________________________ 2_1

const rainbowColors = ['красный', 'оранжевый', 'желтый', 'зеленый', 'голубой', 'синий', 'фиолетовый'];

for (let i = rainbowColors.length - 1; i >= 0; i--) {
    console.log(rainbowColors[i])
}

//___________________________ 2_2

const reversedRainbowColors = []

for (let i = rainbowColors.length - 1; i >= 0; i--) {
  reversedRainbowColors.push(rainbowColors[i])
}

console.log(reversedRainbowColors)

//___________________________ 2_3

console.log(rainbowColors.reverse())

//___________________________ 2_4

console.log(rainbowColors.sort((a,b) => a - b))