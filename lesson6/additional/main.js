// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// const cutString = (str, n) => {
//     let array = [];
//     while (str.length){
//         array.push(str.substring(0,n))
//         str = str.slice(n)
//     }
//     document.write(array)
// }
//
// cutString('наслаждение',3)

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// const delete_characters = (str, length) => {
//     let array = str.substring(str,length)
//     document.write(array)
// }
//
// let str = 'Каждый охотник желает знать';
// delete_characters(str, 7);

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// const insert_dash = (str) => {
//     let insDash = str.replaceAll(' ','-').toUpperCase()
//     document.write(insDash)
// }
//
// let str = "HTML JavaScript PHP";
// insert_dash(str)

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру
// у верхній.

// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// const validName = (str) => {
//     let str1 = str.replaceAll('.',' ').replaceAll('-',' ').replaceAll('_',' ')
//     document.write(str1)
// }
//
// validName(n3)

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// const letters = (array,num) => {
//     for (let i = 0; i < num; i++) {
//         array.push(Math.round(Math.random()*100))
//     }
//     console.log(array)
// }
// //
// let array = [];
// letters(array,5)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort

// let arrayS = array.sort((a , b) => a - b);
// console.log(arrayS);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//     відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

// let arrayF = array.filter(a => (a %2=== 0))
// console.log(arrayF);

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// const capitalize = (str) => str.split(' ').map(word =>`${word[0].toUpperCase()}${word.slice(1)}`).join(' ')
//
// console.log(capitalize('your sun of the bitch'));

// - Створити функцію-валідатор для адрес електронної пошти.
// Перевірка повинна включати в себе:данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж
// на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com,
// і тд - однакові значення)

// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

// const eMailvalid = (str) => {
//     let stremail = str.split('@')
//     if (stremail.length -= 2){
//         console.log('bad')
//     }
// }
//
// eMailvalid('someemail@gmail.com')

// - є масивlet
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: [
//             'html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: [
//             'html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'sass']
//     }
// ];


// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// const sort = coursesArray.sort((u1, u2) => u1.modules - u2.modules);
// console.log(sort)

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5


// const count = (str, stringsearch) => str.split('').reduce((acc,value)=>value===stringsearch?acc+1:acc,0)
//
// let str = "Астрономия это наука о небесных объектах";
// let symb = "о";
// console.log(count(str,symb));


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

// const cutString = (str, n) => {
//     console.log(str.split(' ').slice(0, n ).join(' '));
// }
//
// let str = "Сила тяжести приложена к центру масс тела";
// cutString(str,5)

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).

// let books =[
//     {
//         title: 'A Song of Ice and Fire',
//         pages: 100,
//         autors: ['George R. R. Martin'],
//         genre: ['Epic fantasy'],
//     },
//     {
//         title: 'Journey to the Center of the Earth',
//         pages: 120,
//         autors: ['Jules Verne','Scarlet'],
//         genre: ['Science fiction','adventure novel','Epic fantasy']
//     },
//     {
//         title: 'The Mysterious Island',
//         pages: 300,
//         autors: ['Jules Verne'],
//         genre: ['Adventure novel'],
//     }
// ]

// -знайти наібльшу книжку.

// let bigger = books.sort((a, b) => a.pages < b.pages);
// console.log(bigger)

// - знайти книжку/ки з найбільшою кількістю жанрів

// let moreGenre = books.sort((a, b)=> a.genre < b.genre);
// console.log(moreGenre);


// - знайти книжку/ки з найдовшою назвою

// let title = books.sort((a, b) => a.title.length < b.title.length);
// console.log(title);

// - знайти книжку/ки які писали 2 автори

// let twoAutors = books.filter(book => book.autors.length === 2);
// console.log(twoAutors);


// - знайти книжку/ки які писав 1 автор

// let oneAutors = books.filter(book => book.autors.length === 1);
// console.log(oneAutors);

// - вісортувати книжки по кількості сторінок по зростанню

// console.log(books.sort((a, b) => a.pages - b.pages));