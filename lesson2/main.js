//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let car = 'BMW';
let car1 = 'Mercedes';
let car2 = 'Volkswagen';
let car3 = 'Audi';
let car4 = 'Porche';
let car5 = 'Ferrari';
let car6 = 'Honda';
let car7 = 'Toyota';
let car8 = 'Nissan';
let car9 = 'Dodge';

let cars = [car,car1,car2,car3,car4,car5,car6,car7,car8,car9]
console.log(cars);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let first = {
    title: 'A Song of Ice and Fire',
    pageCount: 1,
    genre: 'Epic fantasy',
}
console.log(first);

let second = {
    title: 'Journey to the Center of the Earth',
    pageCount: 1,
    genre: 'Science fiction, adventure novel',
}
console.log(second);

let third = {
    title: 'The Mysterious Island',
    pageCount: 1,
    genre: 'Adventure novel, Science fiction',
}
console.log(third);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let book = {
    title: 'A Song of Ice and Fire',
    pageCount: 1,
    genre: 'Epic fantasy',
    authors: [
        {
            name: 'George R. R. Martin',
            age: 73,
        }
    ]
}
console.log(book);

let book2 = {
    title: 'Journey to the Center of the Earth',
    pageCount: 1,
    genre: 'Science fiction, adventure novel',
    authors: [
        {
        name: 'Jules Verne',
        age: 77,
        }
    ]
}
console.log(book2);

let book3 = {
    title: 'The Mysterious Island',
    pageCount: 1,
    genre: 'Adventure novel, Science fiction',
    authors: [
        {
        name: 'Jules Verne',
        age: 77,
        }
    ]
}
console.log(book3);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Yuriy' , username: 'YuriyG' ,  password: '1111'},
    {name: 'Vasya' , username: 'VasyaV' ,  password: '222'},
    {name: 'Lidia' , username: 'LidiaL' ,  password: '33333'},
    {name: 'Victor' , username: 'VictorV' ,  password: '2131'},
    {name: 'Misha' , username: 'MishaM' ,  password: '21312'},
    {name: 'Nadia' , username: 'Nadia21' ,  password: '2111'},
    {name: 'Kesha' , username: 'Keshaa' ,  password: '2223'},
    {name: 'Rudolf' , username: 'Rudolf' ,  password: '111221'},
    {name: 'Dima' , username: 'Dim' ,  password: '222133'},
    {name: 'Sanya' , username: 'Sansan' ,  password: '2131112'},
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);