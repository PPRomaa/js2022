// - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні
// на кнопку зникав елемент з id="text".

// let txt = document.createElement(`div`)
// let p = document.createElement(`p`)
// p.innerText = 'Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні' +
//     ' на кнопку зникав елемент з id="text"'
// p.id = 'text'
//
// let button=document.createElement('button');
// button.innerText='click me';
//
// button.onclick = function (){
//     p.innerText = ' '
// }
//
// txt.append(p,button)
// document.body.append(txt)



//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку
// зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let inputf = document.createElement(`form`)
// inputf.id = 'form'
//
// let age=document.createElement('input');
// age.name='age';
// age.type='number';
//
//
// let inputbtn = document.createElement("button")
// inputbtn.innerText = 'send'
//
// inputf.addEventListener('submit',e =>{
//     e.preventDefault()
//     if (e.target.age.value < 18){
//         alert('go away')
//     }else {
//         alert('hello')
//     }
// })
//
// inputf.append(age,inputbtn)
// document.body.appendChild(inputf)




// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let first = document.createElement(`input`)
// first.name = 'first'
// let second = document.createElement(`input`)
// second.name = 'second'
// let third = document.createElement(`input`)
// third.name = 'third'
// let btn = document.createElement(`button`)
// btn.innerText = 'commit'
//
// btn.onclick =()=>{
//     let table = document.createElement(`table`)
//     table.style.border = "2px solid black";
//     for (let i = 0; i < first.value; i++) {
//         let first = document.createElement(`tr`)
//         first.style.border = "1px solid black";
//         for (let j = 0; j < second.value; j++) {
//             let second = document.createElement(`td`)
//             third.style.border = "1px solid black";
//             second.innerText = third.value
//             first.appendChild(second)
//             table.appendChild(first)
//         }
//     document.body.appendChild(table)
//     }
// }
//
// document.body.append(first,second,third,btn)