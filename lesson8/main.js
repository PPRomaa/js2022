// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// class User {
//     constructor(id, name, surname, email, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//     }
// }
//
// let arrayUsers = [
//     new User(13,'Vasya','Vasilev', 'vasia.vasilev@gmail.com', 3809129313),
//     new User(22,'asdasd','asdasd', 'vdasdasd@gmail.com', 38092123133),
//     new User(36,'dfqfaf','asfqffqf', 'fdafvz@gmail.com', 380923456543),
//     new User(42,'asdasd','asdasd', 'sfsfd@gmail.com', 3809245235233),
//     new User(50,'asdasd','asdasd', 'vfvzxvs@gmail.com', 3805252533),
//     new User(66,'asdasd','asdasd', 'vdasdasd@gmail.com', 3809223523133),
//     new User(71,'asdasd','asdasd', 'vdasdasd@gmail.com', 3809223523133),
//     new User(89,'asdasd','asdasd', 'vdasdasd@gmail.com', 3809223523133),
//     new User(90,'asdasd','asdasd', 'vdasdasd@gmail.com', 3809223523133),
//     new User(11,'asdasd','asdasd', 'vdasdasd@gmail.com', 3809223523133),
// ];

// console.log(arrayUsers)



// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// const two = arrayUsers.filter((user) => user.id % 2===0);
// console.log(two)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// const arraysort = arrayUsers.sort((a1,a2) => a1.id - a2.id);
// console.log(arraysort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком
// товарів)

// class Client {
//     constructor(id,name,surname,email,phone,order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//
//     }
// }

// створити пустий масив, наповнити його 10 об'єктами Client

// let emptyarray = [
//     new Client(2,'ascadda','dasadasd','fasfasf@gmail.com',3131233341,
//         ['dasdda','asdasfasf']),
//     new Client(112,'ascadda','fasffa','rafsfasfasf@gmail.com',313112341,
//         ['dasdda','asdasfasf','cafasff','cafasff','cafasff']),
//     new Client(110,'ascadda','ascxz','asfasf@gmail.com',341312341,
//         ['dasdda','asdasfasf','cafasff','cafasff','cafasff','cafasff']),
//     new Client(1,'ascadda','avbgfad','aseasf@gmail.com',431312341,
//         ['dasdda','asdasfasf','cafasff']),
//     new Client(1651,'ascadda','gfsdgv','saffaf@gmail.com',131312341,
//         ['dasdda','asdasfasf','cafasff','cafasff','cafasff','cafasff']),
//     new Client(1341,'ascadda','adfa','asf@gmail.com',331312341,
//         ['dasdda','asdasfasf','cafasff','cafasff','cafasff','cafasff','cafasff']),
//     new Client(121,'ascadda','redsad','ae12ff@gmail.com',331312341,
//         ['dasdda','asdasfasf','cafasff','cafasff','cafasff']),
//     new Client(112311,'ascadda','asggas','adsdcx@gmail.com',231312341,
//         ['dasdda','asdasfasf','cafasff']),
//     new Client(131,'fsdffsf','tred','asddcx@gmail.com',31312421341,
//         ['dasdda','asdasfasf','cafasff']),
//     new Client(1211,'asczxv','dfacv','afsdcvz@gmail.com',3131211341,
//         ['dasdda','asdasfasf']),
// ];

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню.
// (sort)

// const sortOrder = emptyarray.sort((a1,a2) => a1.order.length - a2.order.length);
// console.log(sortOrder)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function car (model,producer,gradyear,maxspeed,engine){
//     this.model = model;
//     this.producer = producer;
//     this.gradyear = gradyear;
//     this.maxspeed = maxspeed;
//     this.engine = engine;
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//     }
//     this.info = function (){
//         console.log(`модель - ${this.model}, виробник - ${this.producer}, рік випуску - ${this.gradyear} ,
//          максимальна швидкість - ${this.maxspeed}, об'єм двигуна - ${this.engine}`)
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         return this.maxspeed = newSpeed
//     }
//     this.changeYear = function (newValue) {
//         return this.gradyear = newValue
//     }
//     this.addDriver = function (driver){
//         this.addDriver= driver
//     }
// }
//
//
// let first = new car('Audi rs7','Audi AG',2020,305, 'v8');
//
// first.changeYear(2300);
// first.increaseMaxSpeed(400);
// first.addDriver('Vasya');
// console.log(first);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// class Cars {
//     constructor (model,producer,gradyear,maxspeed,engine,driver){
//     this.model = model;
//     this.producer = producer;
//     this.gradyear = gradyear;
//     this.maxspeed = maxspeed;
//     this.engine = engine;
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//     }
//     this.info = function (){
//         console.log(`модель - ${this.model}, виробник - ${this.producer}, рік випуску - ${this.gradyear} ,
//          максимальна швидкість - ${this.maxspeed}, об'єм двигуна - ${this.engine}`)
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         return this.maxspeed = newSpeed
//     }
//     this.changeYear = function (newValue) {
//         return this.gradyear = newValue
//     }
//     this.addDriver = function (driver){
//         this.addDriver = driver
//     }
// }
// }
//
// let carOne = new Cars('mazda', 'japan', 1980, 280, 'jz2')
//
// carOne.increaseMaxSpeed(300)
// carOne.changeYear(2000)
// carOne.addDriver('Vasya')
//
// console.log(carOne)




// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// class User {
//     constructor(name,age,footsize) {
//         this.name = name;
//         this.age = age;
//         this.footsize = footsize;
//     }
// }
//
// let princesArray = [
//     new User('Anastasia',16,36),
//     new User('Billi',17,37),
//     new User('Cindy',18,38),
//     new User('Alexa',19,39),
//     new User('Anna',20,31),
//     new User('Evgenia',21,26),
//     new User('Flora',22,34),
//     new User('Lexa',23,33),
//     new User('Mia',24,32),
//     new User('Cris',25,30),
// ]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

// let prince = {
//     name: 'Gregor',
//     age: 24,
//     footsize: 26,
// }

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

// for (const princes of princesArray) {
//     if (princes.footsize === prince.footsize)
//         console.log(`${prince.name} get maried ${princes.name}`)
//
// }

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// function callback(user){
//     return user.footsize === prince.footsize
// }

// const princPrinces = princesArray.find(princes => callback(princes));
// console.log(princPrinces);