// Задание 1
console.log(`Задание 1`);

const arrNumbs1 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arrNumbs1.length; i++) {
    console.log(arrNumbs1[i]);
    if (arrNumbs1[i] == 10) break;
}

// Задание 2
console.log(`Задание 2`);

// const arrNumbs1 = [1, 5, 4, 10, 0, 3]; массив определён в предыдущем задании!

for (let i = 0; i < arrNumbs1.length; i++) {
    if (arrNumbs1[i] == 10) break;
    lastIndex = i;
}

console.log(lastIndex);

// Задание 3
console.log(`Задание 3`);

const arrNumbs2 = [1, 3, 5, 10, 20];
const result = arrNumbs2.join(' ');
console.log(result);


// Задание 4
console.log(`Задание 4`);

let matrix = [];

for (let i = 0; i < 3; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
        row.push(1);
    }
    matrix.push(row);
}

console.log(matrix);


// Задание 5
console.log(`Задание 5`);

const arrNumbs3 = [1, 1, 1];
arrNumbs3.push(2, 2, 2);

console.log(arrNumbs3);


// Задание 6
console.log(`Задание 6`);

const originalArray = [9, 8, 7, 'a', 6, 5];

const result2 = originalArray
    .sort()
    .filter(element => element !== 'a');

console.log(result2);


// Задание 7
let array = [9, 8, 7, 6, 5];

let userNumb = Number(prompt(`Задание 7. Угадайте число в нашем массиве `))

let isFound = array.includes(userNumb);
if (isFound) {
    alert(`Угадал`);
} else {
    alert(`Не угадал`);
}


// Задание 8
console.log(`Задание 8`);
let text = 'abcdef';
let arrletters = text.split('')
let revArrLetters = arrletters.reverse();
let revtext = revArrLetters.join('');

console.log(revtext);


// Задание 9
console.log(`Задание 9`);
const nestedArr = [[1, 2, 3], [4, 5, 6]];
const afterArr = [...nestedArr[0], ...nestedArr[1]];

console.log(afterArr);


// Задание 10
console.log(`Задание 10`);
const random = [2, 7, 1, 9, 3, 8, 5]

for (let i = 0; i < random.length - 1; i++) {
    const summ = random[i] + random[i + 1];
    console.log(summ);
}


// Задание 11
console.log(`Задание 11`);
const arrNumbs4 = [4, 7, 2, 4, 9, 5];

const squareArrNamb = arrNumbs4.map(numb => numb ** 2);

console.log(squareArrNamb);


// Задание 12
console.log(`Задание 12`);
const arrWords = ['book', 'picture', 'letter'];

const lengthWords = arrWords.map(word => word.length);

console.log(lengthWords);


// Задание 13
console.log(`Задание 13`);
const arrNumbs5 = [3, -2, 9, 8, -5];

const negatNumber = arrNumbs5.filter(numb => numb < 0);

console.log(negatNumber);


// Задание 14
console.log(`Задание 14`);
const mainArr = [];

for (let index = 0; index < 10; index++) {
    const randomNum = Math.floor(Math.random() * 11);
    mainArr.push(randomNum);
}

const evenNumb = [];

for (const num of mainArr) {
    if (num % 2 === 0)
        evenNumb.push(num);
}

console.log(mainArr);
console.log(evenNumb);


// Задание 15
console.log(`Задание 15`);


const arithmMeanArr = [];

for (let index = 0; index < 6; index++) {
    const randomNum = Math.floor(Math.random() * 11);
    arithmMeanArr.push(randomNum);
}

const sum = arithmMeanArr.reduce((total, number) => total + number, 0);

const arithmMean = (sum / 6).toFixed(2);
console.log(arithmMean);
