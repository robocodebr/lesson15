let products_container = document.querySelector('.products_container');

fetch('http://my-json-server.typicode.com/RobocodeSchool/marketplace/db')
.then(function(data){
    return data.json();
})
.then(function(json){
    for(let i=0; i<json.products.length; i++){
        products_container.innerHTML+=`
        <div class="products_item_container">
            <h2 class="product_title">${json.products[i].name}</h2>
            <img src="${json.products[i].photo_url}" alt="" class="product_img">
            <p class="product_text"><span class="product_text_bold">Price: </span>${json.products[i].price}</p>
            <p class="product_text"><span class="product_text_bold">Description: </span>${json.products[i].description}</p>
            <a href="#" class="product_link">Seller profile</a>
            <input type="submit" class="submit" value="Buy">
        </div>
        `
    }
})

let cartBtn = document.getElementById('card')
let cartMenu = document.getElementById('card-products')
cartBtn.onclick = function () {
    cartMenu.classList.toggle('.hide')
}
document.addEventListener()