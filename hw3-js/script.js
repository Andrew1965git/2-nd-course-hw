// Задание 1
let password = `Пароль`;
let inputPassword = prompt(`Задание №1. Введите пароль`);

alert(password === inputPassword ? `Пароль введен верно` : `Пароль введен неправильно`);

// Задание 2
console.log(`Задание 2`);
let c = 4;

console.log(0 < c && 10 > c ? `Верно` : `Неверно`);

c = 0;

console.log(0 < c && 10 > c ? `Верно` : `Неверно`);

c = 10

console.log(0 < c && 10 > c ? `Верно` : `Неверно`);

c = -3;

console.log(0 < c && 10 > c ? `Верно` : `Неверно`);

c = 2;

console.log(0 < c && 10 > c ? `Верно` : `Неверно`);

// Задание 3
console.log(`Задание 3`);
let d = 55;
let e = 102;

console.log(d > 100 || e > 100 ? `Верно` : `Неверно`);

// Задание 4
let a = '2';
let b = '3';

alert("Задание 4. Сумма 2 + 3 = " + (Number(a) + Number(b)));

// Задание 5
let monthNumber = Number(prompt("Введите номер месяца"));

switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        alert("Время года зима");
        break;
    case 3:
    case 4:
    case 5:
        alert("Время года весна");
        break;
    case 6:
    case 7:
    case 8:
        alert("Время года лето");
        break;
    case 9:
    case 10:
    case 11:
        alert("Время года осень");
        break;
    default:
        alert("Простите, но в нашем календаре только 12 месяцев");
        break;
}