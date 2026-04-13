// задание// Задание 1

function min(a, b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}

console.log(`Задание 1. Минимальное значение в паре 8 и 4 это - ` + min(8, 4));
console.log(`Задание 1. Минимальное значение в паре 6 и 6 это - ` + min(6, 6));


// Задание 2

console.log(`Задание 2. Проверка на Чётность`);

function oddEven(number) {
    return number % 2 === 0;
}
console.log(oddEven(4));
console.log(oddEven(5));


// Задание 3

console.log(`Задание 3. Квадрат числа 7`);

const square = num => num ** 2;

let valueSquare = square(7);

console.log(valueSquare);


// Задание 4 

const junior = () => {
    const age = Number(prompt(`Задание 4. Сколько Вам лет?`))

    if (age < 0) {
        alert(`Вы ввели неправильное значение.`);
    } else if (age < 14) {
        alert(`Привет, друг!`);
    } else {
        alert(`Добро пожаловать!`);
    }
}

junior()

// Задание 5
console.log(`Задание 5`);

const multiNumb = (a, b) => {
    const numa = Number(a);
    const numb = Number(b);

    if (isNaN(numa) || isNaN(numb)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return `Произведение чисел ${numa} и ${numb} равно ${numa * numb}`
    }
}

console.log(multiNumb(3, 4));

// Задание 6
console.log(`Задание 6`);


const numberCubed = () => {
    const n = Number(prompt(`Задание 6. Введите число`))

    if (n === isNaN) {
        console.log('Переданный параметр не является числом');
    } else {
        console.log(`${n} в кубе равняется ${n ** 3}`);
    }
}

numberCubed()

//  Задание 7
console.log(`Задание 7`);


const circle1 = {
    radius: 9,
    getArea() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 3,
    getArea() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

console.log(`Плошадь круга радиусом ${circle1.radius} м равна  ${circle1.getArea().toFixed(2)} метров квадратных.`);
console.log(`Периметр круга радиусом ${circle1.radius} м равна  ${circle1.getPerimeter().toFixed(2)} метров.`);
console.log(`Плошадь круга радиусом ${circle2.radius} м равна  ${circle2.getArea().toFixed(2)} метров квадратных.`);
console.log(`Периметр круга радиусом ${circle2.radius} м равна  ${circle2.getPerimeter().toFixed(2)} метров.`);