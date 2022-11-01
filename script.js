let taskNumber = 0;
for (let i = 1; i <= 5; i++) {
    taskNumber = i;
    switch (i) {
        /* Задание 1. */
        case 1:
            console.log('----- Задание 1 -----');
            while (showExitOrContinue()) {// Поместил функцию showExitOrContinue в круглые скобки после слова while.

            }
            break;

        /* Задание 2. */
        case 2:
            console.log('----- Задание 2 -----');
            while (showExitOrContinue()) {

            }
            break;

        /* Задание 5. */
        case 3:
            console.log('----- Задание 5 -----');
            while (showExitOrContinue()) {

            }
            break;

        /* Задание 6. */
        case 4:
            console.log('----- Задание 6 -----');
            while (showExitOrContinue()) {

            }
            break;

        /* Задание 10. */
        case 5:
            console.log('----- Задание 10 -----');
            while (showExitOrContinue()) {

            }
            break;
    }
}
//
function showExitOrContinue() {
    return confirm(`Здание ${taskNumber}. Начать проверку или пропустить?`); 
}
