let productsElement = document.getElementById("products");

fetch("http://my-json-server.typicode.com/RobocodeSchool/marketplace/db")
.then(function(data){
    return data.json()
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
    
=======
    }); 
>>>>>>> f6a97f8babf4c2b2125a32467ea8d568f8c667cf
})

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