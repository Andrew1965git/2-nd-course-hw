// Задание 1
console.log(`Задание 1`);
let regstr = 'js';
let upRegstr = regstr.toUpperCase();

console.log(upRegstr);


// Задание 2
console.log(`Задание 2`);

function filterByPrefix(array, prefix) {
    const lowerPrefix = prefix.toLowerCase();
    return array.filter(str => str.toLowerCase().startsWith(lowerPrefix));
}

const words = ['Apple', 'application', 'Banana', 'appetite', 'Cherry'];
console.log(words);
// console.log(prefix);
const result = filterByPrefix(words, 'app');

console.log(result);


// Задание 3
console.log(`Задание 3`);
const numb = 32.58884

console.log(Math.floor(numb));
console.log(Math.ceil(numb));
console.log(Math.round(numb));


// Задание 4
console.log(`Задание 4`);

const max = Math.max(52, 53, 49, 77, 21, 32);
const min = Math.min(52, 53, 49, 77, 21, 32)

console.log(min);
console.log(max);


// Задание 5
console.log(`Задание 5`);

function randomConsole() {
    const randNumb = Math.floor(Math.random() * 10);
    console.log(randNumb);
}

randomConsole();


// Задание 6
console.log(`Задание 6`);

function arrayN(num) {
    const arrayLength = Math.floor(num / 2);
    const resultArr = [];

    for (let index = 0; index < arrayLength; index++) {
        resultArr.push(Math.floor(Math.random() * (num + 1)));
    }
    return resultArr;
}
const result1 = arrayN(6);
console.log(result1);


// Задание 7
console.log(`Задание 7`);

function betweenTwo(a, b) {

    const min = Math.min(Math.ceil(a), Math.floor(b));
    const max = Math.max(Math.ceil(a), Math.floor(b));

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const a = 15;
const b = 5;
const resultBetweenTwo = betweenTwo(a, b);
console.log(`Случайное число между ${a} и ${b} это ${resultBetweenTwo}`);


// Задание 8
console.log(`Задание 8`);

console.log(new Date());


// Задание 9
console.log(`Задание 9`);

const currentDate1 = new Date();

const futureDate = new Date(currentDate1);
futureDate.setDate(currentDate1.getDate() + 73);

console.log('Текущая дата:', currentDate1.toLocaleDateString());
console.log('Дата через 73 дня:', futureDate.toLocaleDateString());


// Задание 10
console.log(`Задание 10`);

function formatDate (date) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
    "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const dayOfWeek = days[date.getDay()];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `
    Дата : ${day} ${months[month]} ${year} - это ${dayOfWeek}.
    Время : ${hours}:${minutes}:${seconds}`;
}

console.log(formatDate(new Date()));