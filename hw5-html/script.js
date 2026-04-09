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