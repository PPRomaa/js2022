let post = JSON.parse(localStorage.getItem(`post`));

let block = document.createElement(`div`);
block.classList.add(`block_p`)

let blockH = document.createElement(`div`);
blockH.classList.add(`block_H`)

let posts = document.createElement(`div`);
posts.classList.add(`post_element`)
posts.innerHTML = `Id - ${post.id} <br> UserID - ${post.userId}</br> Title - ${post.title} <p>${post.body}</p>`

blockH.appendChild(posts)
block.appendChild(blockH)
document.body.appendChild(block)

fetch(`https://jsonplaceholder.typicode.com/posts/`+post.id +`/comments`)
    .then(response => response.json())
    .then(comments =>{
        let commentWrap = document.createElement(`div`)
        commentWrap.classList.add(`commentWrap`)

        let title = document.createElement(`h3`)
        title.classList.add(`commentTittle`)
        title.innerHTML = ` comments `

        let commentsUlList = document.createElement(`ul`)
        commentsUlList.classList.add(`commentsUlList`)

        comments.forEach((comment) => {
            let commentsLilist = document.createElement(`li`)
            commentsLilist.classList.add(`commentLi`)
            commentsLilist.innerHTML = `<h3>${comment.name}</h3> <h4>${comment.email}</h4> <p>${comment.body}</p>`

            commentsUlList.appendChild(commentsLilist)
        })
        commentWrap.append(title,commentsUlList)
        block.appendChild(commentWrap)
    })