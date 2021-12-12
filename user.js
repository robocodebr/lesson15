let url = 'https://my-json-server.typicode.com/Robocodeschool/marketplace/db';

let url_params = new URLSearchParams(window.location.search);
const id = url_params.get('id');

function darw_user(user){
    return `
        <div>
            <h1 class="name">${user.name} ${user.sirname}</h1>
            <img src="${user.photo_url}" alt="${user.name} ${user.sirname}">
            <p>Balance: ${user.balance}</p>
        </div>
    ` 
}

let body = document.getElementsByTagName('body')[0];


if(id == null){
    body.innerHTML = 'not a user';
}else{
    fetch(url)
    .then((data)=>{
        return data.json();
    })
    .then((json)=>{
        let user = json.users.find(u => u.id == id);
        if(user != undefined){
            body.innerHTML = darw_user(user);
        }else{
            body.innerHTML = 'not a user';
        }
    })
}

