// - Є масив:
// let array = ['Main','Products','About us','Contacts']

// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та
// додає його до блоку .menu
// Завдання робити через цикли.

// let menu = document.getElementsByClassName('menu')[0]
// for (const arr of array) {
//     let li = document.createElement(`li`)
//     li.append(arr)
//     menu.appendChild(li)
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// for (const titMou of coursesAndDurationArray) {
//     let block = document.createElement(`div`)
//
//     block.innerHTML = `Title - ${titMou.title}. monthDuration - ${titMou.monthDuration} `
//
//     document.body.appendChild(block)
// }

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// for (const creater of coursesAndDurationArray) {
//     let block = document.createElement(`div`)
//     block.classList.add(`item`)
//
//     let h1 = document.createElement(`h1`);
//     h1.classList.add('heading')
//     h1.innerHTML = creater.title
//
//     let p = document.createElement(`p`)
//     p.classList.add('description')
//     p.innerHTML = creater.monthDuration
//
//
//     block.append(h1,p)
//     document.body.appendChild(block)
// }