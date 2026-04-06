// Задание 1
let i = 0;
console.log(`Задание 1`)
do {
    console.log(`Привет!`);
    i++;
} while (i <= 1);


// Задание 2

i = 1;
console.log(`Задание 2`)

while (i < 6) {
    console.log(i);
    i++;
}

// Задание 3

i = 7;
console.log(`Задание 3`)

while (i < 23) {
    console.log(i);
    i++;
}

// Задание 4

console.log(`Задание 4`)
const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};

for (const name in obj) {
    if (name) {
        console.log(`"${name}" — зарплата "${obj[name]}" долларов`);
    }
}

// Задание 5

let n = 1000

    / console.log(`Задание 5`)
let num = 0

for (n = 1000; n >= 50; n = n / 2) {
    num++;
}
console.log("Количество итераций", num);
console.log("Результат деления", n);

// Задание 6

console.log(`Задание 6`)
let friday = 4
for (d = 0; d <= 31; d++) {

    if (d == friday) {
        console.log(`Сегодня пятница, ${d}-е число. Необходимо подготовить отчет.`);
        friday = friday + 7;
    }
}