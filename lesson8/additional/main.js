// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

/*         приклад
function explorer(htmlElement) {
    console.log(htmlElement);
    let children = htmlElement.children;
    if (children.length !== 0) {
        for (const child of children) {
            explorer(child);
        }
    }
}
explorer(document.body);
*/


const dclass = document.getElementsByClassName('rules');

for (const element of dclass) {
    console.log(element.classList)
}
