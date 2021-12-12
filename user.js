function drawUser(user) {
    return `
    <div>
        <h1>${user.name} ${user.sirname}</h1>
        <img src="${user.photo_url}" alt="${user.name} ${user.sirname}">
        <p>Dalance: ${user.balance}</p>
    </div>
    `
}

const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id')
console.log(id)
let div = document.getElementsByTagName('div')[0];
if (div == null) {
    div.innerHTML = 'Not a user...'
}

fetch('')
.then(function (data) {
    return data.json()
})
.then(function (params) {
    let user = data.users.find(u => u.id == id)
    console.log(user)
    if (user == undefined) {
        div.innerHTML = "user with id "+id+" not exists"
    } else {
        div.innerHTML = drawUser(user)
    }
})

