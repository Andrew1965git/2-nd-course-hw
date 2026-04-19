// Угадай число
document.getElementById('numberGame').addEventListener('click', function () {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let userAttempt;

    alert('Добро пожаловать в игру "Угадай число"!');
    alert('Я загадал число от 1 до 100. Попробуй угадать!');

    while (userAttempt !== randomNumber) {
        const input = prompt('Введи своё предположение (или нажми "Отмена", чтобы выйти):');

        if (input === null) {
            alert('Игра завершена.');
            return;
        }

        userAttempt = parseInt(input, 10);

        if (isNaN(userAttempt)) {
            alert('Ошибка: введённое значение не является числом. Попробуй ещё раз!');
            continue;
        }

        if (userAttempt < 1 || userAttempt > 100) {
            alert('Пожалуйста, введи число в диапазоне от 1 до 100!');
            continue;
        }

        attempts++;

        if (userAttempt < randomNumber) {
            alert('Загаданное число больше!');
        } else if (userAttempt > randomNumber) {
            alert('Загаданное число меньше!');
        } else {
            alert(`Поздравляю! Ты угадал число ${randomNumber} за ${attempts} попыток!`);
        }
    }
});


// Простая арифметика
document.getElementById('arifmGame').addEventListener('click', function () {
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateTask() {
        const operations = ['+', '-', '*', '/'];
        const operation = operations[Math.floor(Math.random() * operations.length)];

        let num1, num2, answer;

        switch (operation) {
            case '+':
                num1 = getRandomNumber(1, 50);
                num2 = getRandomNumber(1, 50);
                answer = num1 + num2;
                break;
            case '-':
                num1 = getRandomNumber(10, 100);
                num2 = getRandomNumber(1, num1 - 1);
                answer = num1 - num2;
                break;
            case '*':
                num1 = getRandomNumber(1, 12);
                num2 = getRandomNumber(1, 12);
                answer = num1 * num2;
                break;
            case '/':
                num2 = getRandomNumber(1, 12);
                answer = getRandomNumber(1, 12);
                num1 = num2 * answer;
                break;
        }

        return {
            task: `${num1} ${operation} ${num2}`,
            answer: answer
        };
    }

    function playGame() {
        alert('Добро пожаловать в арифметическую игру!\nРешайте задачи и вводите ответы.');

        let correctAnswers = 0;
        const totalTasks = 5;

        for (let i = 0; i < totalTasks; i++) {
            const { task, answer } = generateTask();

            const userInput = prompt(`Задача ${i + 1}/${totalTasks}:\n${task}\nВведите ответ:`);

            if (userInput === null) {
                alert('Игра прервана.');
                return;
            }

            const userAnswer = parseInt(userInput, 10);

            if (isNaN(userAnswer)) {
                alert('Это не число! Задача считается неверной.');
            } else if (userAnswer === answer) {
                alert('Правильно!');
                correctAnswers++;
            } else {
                alert(`Неверно. Правильный ответ: ${answer}`);
            }
        }

        alert(`Игра окончена!\nПравильных ответов: ${correctAnswers} из ${totalTasks}`);
    }

    playGame();
});


// Пререверни текст
document.getElementById('reversTextGame').addEventListener('click', function () {
    function reverseText() {

    const userInput = prompt('Введите текст, который нужно перевернуть:');

if (userInput === null) {
        alert('Вы отменили операцию.');
        return;
    }

    if (userInput === '') {
        alert('Ошибка: вы не ввели текст!');
        return;
    }

    const reversedText = userInput.split('').reverse().join('');

    alert(`Исходный текст: ${userInput}\nПеревёрнутый текст: ${reversedText}`);
}

reverseText();
});


// Камень ножницы бумага
document.getElementById('stoneGame').addEventListener('click', function () {
   const choices = ["камень", "ножницы", "бумага"];

const userChoice = prompt("Выберите: камень, ножницы или бумага").toLowerCase();

if (!choices.includes(userChoice)) {
    alert("Некорректный ввод! Пожалуйста, введите 'камень', 'ножницы' или 'бумага'.");
    } else {
    const computerChoiceIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[computerChoiceIndex];

    let resultMessage;

    if (userChoice === computerChoice) {
        resultMessage = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        resultMessage = "Вы победили!";
    } else {
        resultMessage = "Компьютер победил!";
    }

    const result = `
        Ваш выбор: ${userChoice}
        Выбор компьютера: ${computerChoice}
        Результат: ${resultMessage}
    `;

    alert(result);
    }
});

// Прсотая викторина
document.getElementById('victorinaGame').addEventListener('click', function () {
const quiz = [
    {
        question: "Какого цвета небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

let correctAnswersCount = 0;


for (let i = 0; i < quiz.length; i++) {
    const currentQuestion = quiz[i];
    
    let questionText = currentQuestion.question + "\n\n" + currentQuestion.options.join("\n");
    
    let userAnswer = prompt(questionText);
    
    if (userAnswer === null) {
        alert("Вы прервали викторину!");
        break;
    }
    
    userAnswer = parseInt(userAnswer, 10);
    
    if (userAnswer === currentQuestion.correctAnswer) {
        correctAnswersCount++;
    }
}

alert(`Вы ответили правильно на ${correctAnswersCount} из ${quiz.length} вопросов!`);

});