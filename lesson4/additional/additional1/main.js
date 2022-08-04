// --створити масив з:
// - з 5 числових значень
// let y = [1,2,3,4,5];

// - з 5 стічкових значень
// let o = ['a','b','c','d','f'];

// - з 5 значень стрічкового, числового та булевого типу
// let r = ['a','b',1,2,true];

// - та вивести його в консоль
// console.log(y,o,r)

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let x = [`${y} ${o} ${r}`];
// console.log(x)


// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// let array = [2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while

// let i = 0;
// while (i < array.length){
//     console.log(array[i])
//     i++
// }

// 2. перебрати його циклом for

// for (const number of array) {
//     console.log(number)
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = 0;
// while (i < array.length ){
//     if (array[i] % 2!== 0){
//         console.log(array[i])
//     }
//     i++
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = 0; i < array.length; i++){
//     if (array[i] % 2 !== 0){
//         console.log(array[i])
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let i = 0;
// while (i < array.length ){
//     if (array[i] % 2 === 0){
//         console.log(array[i])
//     }
//     i++
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = 0; i < array.length; i++){
//     if (array[i] % 2 === 0){
//         console.log(array[i])
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = 0; i < array.length; i++){
//     if (array[i] % 3 === 0){
//         array[i] = 'Octen'
//     }
// }
// console.log(array)

// 8. вивести масив в зворотньому порядку.

// let arrayR = [2,17,13,6,22,31,45,66,100,-18];
// console.log(arrayR.reverse())

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 1. перебрати його циклом while (reverse)

// let i = arrayR.length-1;
// while (i < 0){
//     console.log(arrayR[i])
//     i--
// }

// 2. перебрати його циклом for

// for (let i = arrayR.length-1; i >= 0; i--) {
//     console.log(arrayR[i])
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = arrayR.length-1;
// while (i >= 0) {
//     if (arrayR[i] % 2!==0)
//         console.log(arrayR[i])
//     i--
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = arrayR.length-1; i >= 0; i--) {
//     if (arrayR[i] % 2 !== 0){
//         console.log(arrayR[i])
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let i = arrayR.length-1;
// while (i >= 0) {
//     if (arrayR[i] % 2 === 0)
//         console.log(arrayR[i])
//     i--
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = arrayR.length-1; i >= 0; i--) {
//     if (arrayR[i] % 2 === 0){
//         console.log(arrayR[i])
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = arrayR.length-1; i >= 0; i--) {
//     if (arrayR[i] % 3 === 0){
//         arrayR[i] = 'Octen'
//     }
// }
// console.log(arrayR)

// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let num = [1,2,3,4,5,6,7,8,9,10]
// for (const number1 of num) {
//     console.log(number1)
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let elements = ['a','s','d','f','g','h','m','d','x','s']
// for (const elements1 of elements) {
//     console.log(elements1)
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let numElements = [1,2,3,4,5,'h','m','d','x','s']
// for (const numElem of numElements) {
//     console.log(numElem)
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві
// елементи
// let numElements = [1,2,3,4,5,'h','m',true,'x',false]
// for (let i = 0; i < numElements.length; i++){
//     if (typeof numElements[i] === 'boolean'){
//         console.log(numElements[i])
//     }
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові
// елементи

// let numElements = [1,2,3,4,5,'h','m',true,'x',false]
// for (let i = 0; i < numElements.length; i++){
//     if (typeof numElements[i] === 'number'){
//         console.log(numElements[i])
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові
// елементиL

// let numElements = [1,2,3,4,5,'h','m',true,'x',false]
// for (let i = 0; i < numElements.length; i++){
//     if (typeof numElements[i] === 'string'){
//         console.log(numElements[i])
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

// let array = [];
// array[1] = 'name';
// array[2] = 21;
// array[3] = false;
// array[4] = true;
// array[5] = 'John';
// array[6] = 'Doe';
// array[7] = 233;
// array[8] = 4;
// array[9] = 'all';
// array[10] = 'sss';
// console.log(array)

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(i)
//     document.write(`<h2>Text ${i}</h2>`)
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log(i)
//     document.write(`<h2>Text ${i}</h2>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100  ; i+=2) {
//     console.log(i)
//     document.write(i + '')
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++){
//     if (i % 2 === 0){
//         console.log(i)
//         document.write(i + '')
//     }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++){
//     if (i % 2 !== 0){
//         console.log(i)
//         document.write(i + '')
//     }
// }

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).

// let books =[
//     {
//         title: 'A Song of Ice and Fire',
//         pages: 100,
//         name: ['George R. R. Martin'],
//         genre: ['Epic fantasy'],
//     },
//     {
//         title: 'Journey to the Center of the Earth',
//         pages: 120,
//         name: ['Jules Verne','Scarlet'],
//         genre: ['Science fiction','adventure novel','Epic fantasy']
//     },
//     {
//         title: 'The Mysterious Island',
//         pages: 300,
//         name: ['Jules Verne'],
//         genre: ['Adventure novel','Science fiction'],
//     }
// ]

// -знайти наібльшу книжку.

// let max = books[0]
//
// for (const book of books) {
//     if (book.pages > max.pages){
//         max = book
//     }
// }
// console.log(max)

// - знайти книжку/ки з найбільшою кількістю жанрів

// for (const book of books) {
//     if (book.genre.length ===3)
//         console.log(book)
// }

// - знайти книжку/ки з найдовшою назвою

// for (const book of books) {
//     if (book.title.length > 0){
//         console.log(book)
//     }
//
// }

// - знайти книжку/ки які писали 2 автори

// for (const book of books) {
//     if (book.name.length===2)
//         console.log(book)
// }

// - знайти книжку/ки які писав 1 автор

// for (const book of books) {
//     if (book.name.length===1)
//         console.log(book)
// }