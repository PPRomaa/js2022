// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let maxNum = (a,b,c)=>{
//     if (a < b && a< c){
//         console.log(a)
//     }else if (b < a && b < c){
//         console.log(b)
//     }else if (c < b && c < a){
//         console.log(c)
//     }
// }
//
// maxNum(10,6,3)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)


// let maxNum = (a,b,c)=>{
//     if (a > b && a > c){
//         console.log(a)
//     }else if (b > a && b > c){
//         console.log(b)
//     }else if (c > b && c > a){
//         console.log(c)
//     }
// }
//
// maxNum(10,6,3)

// - створити функцію яка повертає найбільше число з масиву


// let maxNum = (array)=>{
//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (max < array[i]){
//             max = array[i];
//         }
//     }
//     return max
// }

// let array = [1231,123134,3,2,15200000,11,111123,31];

// console.log(maxNum(array));


// - створити функцію яка повертає найменьше число з масиву

// let minNum = (array)=>{
//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (max > array[i]){
//             max = array[i];
//         }
//     }
//     return max
// }
//
// console.log(minNum(array));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


// let numsArray =(array)=>{
//     let num = 0
//     for (let i = 0; i < array.length; i++) {
//         num += array[i];
//     }
//     return num
// }
//
// console.log(numsArray(array));

// - Дано натуральное число n. Выведите все числа от 1 до n.

// let numbern = (n) => {
//     for (let i = 0; i < n; i++) {
//         console.log(i)
//     }
// }
//
// numbern(10)



// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания,
// если A < B, или в порядке убывания в противном случае.

// const numbersAB = (a,b) => {
//     if (a > b) {
//         for (let i = a; i > b; i--) {
//             console.log(i)
//         }
//     }
//     else if (a < b) {
//         for (let i = a; i < b; i++) {
//             console.log(i)
//         }
//     }
//         else if (a === b){
//             console.log(`a = ${a} b = ${b}`)
//         }
//         else {
//         console.log(`????????`)
//     }
// }
//
// numbersAB(1,0)


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let foo = [9,8,0,4]

// const arrayObject = (array,index) => {
//     let arrayKey = array[index];
//     array[index] = array[index + 1];
//     array[index + 1] = arrayKey;
//     return array
// }
//
// console.log(arrayObject(foo, 2));


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок
// не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let example = [0,0,1,0]
//
// const switchElements = (array) => {
//     for (let i = array.length - 1; i >= 0; i--) {
//         if (array[i] === 0){
//             array.splice(i,1)
//             array.push(0);
//         }
//     }
//     console.log(array)
// }
//
// switchElements(example)

