// 1. Створити пустий масив та :

// let array = [];
//     a. заповнити його 50 парними числами за допомоги циклу.

// for (let i = 0; i < array.length+50; i++) {
//     if (i % 2 === 0)
//     console.log([i])
// }

//     b. заповнити його 50 непарними числами за допомоги циклу.

// for (let i = 0; i < array.length+50; i++) {
//     if (i % 2 !== 0)
//         console.log([i])
// }

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// for (let i = 0; i < 20; i++) {
//     array.push(Math.round(Math.random()*20))
// }
// console.log(array)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// for (let i = 0; i < 20; i++) {
//     array.push(Math.round(Math.random() * (732 - 8) + 8));
// }
// console.log(array)

// 2. Вивести за допомогою console.log кожен третій елемен

// for (let i = 2; i < array.length; i+=3){
//     console.log(array[i])
//
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// for (let i = 2; i < array.length; i+=3){
//     if (array[i] % 2===0) {
//         console.log(array[i])
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let newArray = [];
// for (let i = 2; i < array.length; i+=3){
//     if (array[i] % 2===0) {
//         newArray = array[i]
//     }
// }
// console.log(newArray)

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let array2 = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i = 0; i < array2.length; i++) {
//     if (array2[i] % 2 === 0) {
//         console.log(array2[i - 1])
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let array3 = [100,250,50,168,120,345,188];
// let price  = 0;
// for (const number of array3) {
//     price += number
// }
// console.log(price)


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let rNumber = [];
// let rNumber2 = [];
//
// for (let i = 0; i < 20; i++) {
//     rNumber.push(Math.round(Math.random()*20))
// }
// console.log(rNumber)
//
// for (const rNumber2Element of rNumber) {
//     rNumber2.push(rNumber2Element*5)
// }
// console.log(rNumber2)

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let array4 = ['John',true,'Rip',22,1,false,'Li',2];
// let arrayIn=[];
//
// for (let array4element of array4){
//     if (typeof array4element === 'number'){
//         arrayIn.push(array4element)
//     }
// }
// console.log(arrayIn)

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// let usersWithCities = [];
// for (let users of usersWithId) {
//     for (let city of citiesWithId) {
//         if (users.id === city.user_id) {
//             users.address = city;
//             usersWithCities = usersWithId
//         }
//     }
// }
// console.log(usersWithCities)


//   - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let arrayT = [2,1,8,5,6,3,4,27,7,99];
//
// for (let number of arrayT) {
//     if (number % 2 === 0){
//         console.log(number)
//     }
// }


//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати
// значення одного масиву в інший.


// let arrayT = [2,1,8,5,6,3,4,27,7,99];
// let arrayTp = [];
//
// for (let arrayTelement of arrayT){
//         arrayTp.push(arrayTelement)
// }
// console.log(arrayTp)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.


// let abc = ['a', 'b', 'c']
// let abcText = ['']
//
// for (let i = 0; i < abc.length; i++){
//     let abcElement = abc[i];
//     abcText += abcElement
// }
// console.log(abcText)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let wtext = [''];
// let i = 0
// while (i<abc.length){
//     let abcElement = abc[i]
//     wtext += abcElement
//     i++
// }
// console.log(wtext

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let fotext = [''];
// for (let abcElement of abc){
//     fotext += abcElement;
// }
// console.log(fotext)