
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

.then(function(data){
    data.products.forEach(element => {
        productsElement.innerHTML += addCard(element);
    })
})


function addCard(card) {
    return ` <div class="card">
    <p class="name">${card.name}</p>
    <img src="${card.photo_url}" alt="${card.name}">
    <p class="price"><b>Price</b>:${card.price}</p>
    <p class="description"><b>Description</b>:Can display 2-lines X 16-characters. Operate with 5V DC.</p>
    <a href="" class="seller">Seller profile</a>
    <button type="button" class="buy">Buy</button>
    </div>`
    

    };

function addCard(card) {
    return `<div class="card">
    <p class="name">${card.name}</p>
    <img src="${card.photo_url}" alt="${card.name}">
    <p class="price"><b>Price</b>:${card.price}$</p>
    <p class="description"><b>Description</b>:${card.description}</p>
    <a href="" class="seller">Seller profile</a>
    <button type="button" class="buy">Buy</button>
</div>`
}












>>>>>>> ab1399ed03ec45c4203c879d9d2ddcd78b07ed04
