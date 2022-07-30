// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює
//     1, 0, -3


// let x = +prompt('num');
//
// if (x === 0){
//     console.log('false')
// } else {
//     console.log('true')
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число (в першу, другу, третю или четверту частину години).


// let time = +prompt('enter your time')
//
// if (time > 0 && time <= 15 ){
//     console.log('first');
// } else if (time > 15 && time <=30){
//     console.log('second');
// } else if (time > 30 && time <45){
//     console.log('third');
// } else if (time > 45 && time <59){
//     console.log('fourth');
// } else {
//     console.log('???????');
// }



// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).
//

// let day = +prompt('enter todays date')
//
// if (day > 0 && day <= 10) {
//     console.log('first half');
// } else if (day > 10 && day <= 20) {
//     console.log('second half');
// } else if (day > 20 && day <= 31) {
//     console.log('third half');
// } else {
//     console.log('??????');
// }


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).


// let day = +prompt('What is the day today (1 - 7)')
// switch (day) {
//     case 1:
//         document.write('monday');
//     break;
//     case 2:
//         document.write('Tuesday');
//     break;
//     case 3:
//         document.write('Wednesday');
//     break;
//     case 4:
//         document.write('Thursday');
//     break;
//     case 5:
//         document.write('Friday');
//     break;
//     case 6:
//         document.write('Saturday');
//     break;
//     case 7:
//         document.write('Sunday');
//     break;
//     default:
//         document.write('try again')
//      break
// }



//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let first = +prompt('number');
// let seccond = +prompt('number');
//
// if (first > seccond){
//     document.write(first);
// }else if (first < seccond){
//     document.write(seccond);
// } else if (first === seccond){
//     document.write(first)
// } else {
//     document.write('???????');
// }


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть
//     код який, за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної
//     х являється falsy (хибноподыбне, тобто кастується до false)

// let x = prompt('enter your text') || '?????';
// console.log(x)