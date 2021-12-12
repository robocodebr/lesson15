function drawUser(user) {
    return `<h1>${user.name} ${user.sirname}</h1>
    <h1>Name Surname</h1>
        <img src="${user.photo_url}" 
        alt="${user.name}">
        <p>
            Balance: ${user.balance}
        </p>`
}

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);
let div = documents.getElementsByTagName("div")[0];
if(id ==null) {
    div.innerHTML = "Not a user. . . ."
}

fetch("http://my-json-server.typicode.com/RobocodeSchool/marketplace/db")
.then(function(data){
    return data.json()
})
.then(function(data){
 let user = data.users.find(u => u.id == id);
 console.log(user)
 if(user == underfiend){
     div.innerHTML = "user with id "+id+"not exists"
 } else {
     div.innerHTML = drawUser(user);
 }
})