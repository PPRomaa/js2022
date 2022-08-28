// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
//     котра має детальну інфу про поточний пост.

let user = JSON.parse(localStorage.getItem(`user`));

let div = document.createElement(`div`);
div.classList.add(`blockk`);

let divBlock = document.createElement(`div`);
divBlock.classList.add(`blockUser`);

let block = document.createElement(`div`)
block.classList.add(`blockd`)

function foo (user){
    for (const userElement in user) {
        if (typeof (user[userElement]) === `object`){
            let userName = document.createElement(`div`)
            userName.innerHTML = `${userElement}`
            divBlock.append(userName)
            foo(user[userElement],divBlock)
        }else {
            let info = document.createElement(`div`)
            info.innerHTML = `${userElement}: ${user[userElement]}`
            divBlock.appendChild(info)
        }
    }
}

foo(user,divBlock)

let btn = document.createElement(`button`);
btn.innerText = `posts user`
btn.classList.add(`btn`)

divBlock.append(block,btn)
div.appendChild(divBlock)
document.body.appendChild(div)


btn.onclick = () =>{
    fetch(`https://jsonplaceholder.typicode.com/users/`+ user.id + '/posts/')
        .then(response => response.json())
        .then(post => {
            // localStorage.setItem(`post`,JSON.stringify(post))
            // document.location = `../post-details/post-details.html`

            let blockPost = document.createElement(`ul`)
            blockPost.classList.add(`title_posts`)
            post.forEach((post) => {
                let li_title = document.createElement(`li`)
                li_title.classList.add(`li_title`)
                li_title.innerHTML = `<br>${post.title}</br>`

                let buttn = document.createElement(`button`);
                buttn.classList.add(`buttn`)
                buttn.innerText = `post`

                buttn.onclick = () => {
                    localStorage.setItem(`post`,JSON.stringify(post))
                    document.location = `../post-details/post-details.html`
                }

                li_title.appendChild(buttn)
                blockPost.appendChild(li_title)
            })
            btn.style.display = 'none'
            div.appendChild(blockPost)
        })
}

