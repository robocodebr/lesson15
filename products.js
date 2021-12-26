
function drawUser(user) {  
    return `  <h1>${user.name}</h1>  
    <img src="${user.photo_url}" alt="${user.name} ${user.sirname}">  
    <p>  
        Balance: ${user.balance}  
    </p>`  
}  
  
  
const urlParams = new URLSearchParams(window.location.search);  
const id = urlParams.get("id")  
console.log(id);  
if (id ==null) {  
    div.innerHTML = "Not a user...."  
}  
fetch("http://my-json-server.typicode.com/RobocodeSchool/marketplace/db")  
.then(function(data){  
    return data.json()  
})  
.then(function(data){  
  let user = data.users.find(u => u.id == id);  
  console.log(user)  
  if(user == undefined){  
      div.innerHTML = "user with id"+id+" not exists"  
  }  
})