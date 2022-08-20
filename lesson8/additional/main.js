// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

let array = [];
function foo (htmlElement){
    if (htmlElement.className){
        array.push(htmlElement)
    }
    if (htmlElement.children.length !== 0){
        for (const child of htmlElement.children) {
            foo(child)
        }
    }
}

foo(document.body)
console.log(array)