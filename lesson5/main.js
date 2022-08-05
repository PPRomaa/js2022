// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б//

// function rectangle(a,b) {
//     let area = a * b;
//     return area;
// }
// let x = rectangle(10,10);
// console.log(x)

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function triangle(a) {
//     let radius= a / 2;
//     let xxx = 3.14 * radius;
//     return xxx
// }
//
// console.log(triangle(30));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function cilinder(r,h) {
//     let cilindr = 2 * 3.14 * r * h;
//     return cilindr
// }
//
// console.log(cilinder(20, 20));

// - створити функцію яка приймає масив та виводить кожен його елемент

// function arrayPrint(array){
//     for (const item of array) {
//         console.log(item)
//     }
// }

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// arrayPrint(users)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент




// function createPtext(arguments){
//     document.write(`<p>${arguments}</p>`)
// }
//
// createPtext('hello okten')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий



// function createUlli(arguments){
//     document.write(`<ul>
//         <li>${arguments}</li>
//         <li>${arguments}</li>
//         <li>${arguments}</li>
//     </ul>`)
// }
//
// createUlli('hello okten')



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)



// function createUlli(text1,text2){
//     document.write(`<ul>`)
//     let i = 0;
//     while (i < text2){
//             document.write(`<li>${text1}</li>`)
//         i++
//     }
//     document.write(`</ul>`)
// }
//
// createUlli('hello okten',3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


// function arrayElem(array){
//     document.write(`<ul>`)
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// let numElements = [1,2,3,4,5,'h','m',true,'x',false]
//
// arrayElem(numElements)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// function  getObject(array){
//     for (const arrayElement of array) {
//         document.write(`<div>
//             <div>Id - ${arrayElement.id}</div>
//             <div>Name - ${arrayElement.name}</div>
//             <div>Age - ${arrayElement.age}</div>
//         </div>`)
//     }
// }
//
//
// let usersList = [
//     {
//         id: 1,
//         name: 'Leanne Graham',
//         age: '22',
//     },
//     {
//         id: 2,
//         name: 'Ervin Howell',
//         age: '11',
//     }
// ]
//
// getObject(usersList)


// - створити функцію яка повертає найменьше число з масиву

// function maxArray(array){
//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (max > array[i]){
//             max = array[i];
//         }
//     }
//     return max
// }
// let arrayNum = [111,313,41,124,2,1,4215,133,657]
// console.log(maxArray(arrayNum));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13



// function numSum(array){
//     let num = 0;
//     for (let i = 0; i < array.length; i++) {
//         num += array[i]
//     }
//     return num
// }
//
// console.log(numSum(arrayNum));