fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(respnose => respnose.json())
    .then(users =>{
        let div = document.createElement(`div`);
        div.classList.add('block')
        let username = document.createElement(`ul`)
        username.classList.add(`userBlock`)

        users.forEach((user)=> {
            let userItem = document.createElement(`li`)
            userItem.classList.add(`item`)
            userItem.innerHTML = `<h2>id - ${user.id} name: ${user.name}</h2>`

            let btn = document.createElement(`button`)
            btn.innerText = 'Info'
            btn.classList.add(`button`)

            btn.onclick = () => {
                fetch(`https://jsonplaceholder.typicode.com/users/`+ user.id)
                    .then(response => response.json())
                    .then(user =>{
                        localStorage.setItem(`user`,JSON.stringify(user))
                        document.location = `./user-details/user-details.html`
                    })

            }
            userItem.appendChild(btn)
            username.append(userItem)
        })
        div.appendChild(username)
        document.body.appendChild(div)
    })
