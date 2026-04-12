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