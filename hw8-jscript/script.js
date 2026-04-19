// задание 1
console.log(`Задание 1`);

const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));


// задание 2
console.log(`Задание 2`);

function filter(array, rulefunction) {
   const result = [];
   for (let i = 0; i < array.length; i++) {
      if (rulefunction(array[i])) {
        result.push(array[i]) 
      } 
   }
   return result;   
}

function isPositive(num) {
   return num > 0;
}

function isMale(person) {
   return person.gender === `male`;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people2 = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people2, isMale));

// задание 3
   console.log(`Задание 3.`);

const intervalId = setInterval(() => {
   console.log(`Привет!`);
}, 3000);

setTimeout(() => {
   clearInterval(intervalId);
   console.log(`30 секунд прошло`);
}, 30000);


setTimeout(() => {  // Это задержка выполнения заданий 4 и 5
   
// задание 4

function delayForSecond(callback) {
   setTimeout(callback, 1000);
}

delayForSecond(function () {
   console.log(`Задание 4`);
   console.log(`Привет Глеб!`);
})

// задание 5
   
function delayForSecond2(cb) {
   setTimeout(() => {
      console.log(`Задание 5`);
      console.log('Прошла одна секунда');
      if(cb) {  cb(); }
   }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// delayForSecond(sayHi('Глеб'));
delayForSecond2(() => sayHi(`Глебушка`));
}, 35000);

