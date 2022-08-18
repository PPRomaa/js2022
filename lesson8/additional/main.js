// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль


function gcname (htmlElement) {
    console.log(htmlElement)
    let narray = [];
    let slet = document.getElementsByClassName(`rules`);
    narray.push(slet)
    return console.log(narray)
}
gcname(document.body);
