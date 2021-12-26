let products_container = document.querySelector('.products_container');

fetch('http://my-json-server.typicode.com/RobocodeSchool/marketplace/db')
	.then(function(data) {
		return data.json();
	})
	.then(function(json) {
		for (let i = 0; i < json.products.length; i++) {
			products_container.innerHTML += `
        <div class="products_item_container">
            <h2 class="product_title">${json.products[i].name}</h2>
            <img src="${json.products[i].photo_url}" alt="" class="product_img">
            <p class="product_text"><span class="product_text_bold">Price: </span>${json.products[i].price}</p>
            <p class="product_text"><span class="product_text_bold">Description: </span>${json.products[i]
				.description}</p>
            <a href="#" class="product_link">Seller profile</a>
            <input type="submit" class="submit" value="Buy" onclick="buy(${i})">
        </div>
        `;
		}
	});

function buy(i) {
	let currentProduct = document.getElementsByClassName('products_item_container')[i];
	let product = {};
	product.title = currentProduct.children[0].innerHTML;
	product.img = currentProduct.children[1].src;
	product.price = currentProduct.children[2].childNodes[1].nodeValue;
	let productsInCart = localStorage.getItem('cart');
	if (localStorage.length == 0) {
		productsInCart = [];
	} else {
		productsInCart = JSON.parse(productsInCart);
	}

	productsInCart.push(product);
	localStorage.setItem('cart', JSON.stringify(productsInCart));
	console.log(localStorage.getItem('cart'));
	drawCart();
}

function drawCart() {
	let productsInCart = JSON.parse(localStorage.getItem('cart'));
	let totalPrice = productsInCart.reduce(function(sum, current) {
		return sum + parseInt(current.price);
	}, 0);
 let productItems = {}
	
    let productItems = productsInCart.map((elem) => `<p>
    <img src="${elem.img}" alt="${elem.title}" width="50">
    ${elem.title}|${elem.price}</p>`);
    
	cartMenu.innerHTML = `<div>
    ${productItems.join('')}
    <p>Total price: ${totalPrice}</p>
    <button type="button">Buy All</button>
</div>`;
}

let cartBtn = document.getElementById('cart');
let cartMenu = document.getElementById('card-products');
cartBtn.addEventListener('click', function() {
	cartMenu.classList.toggle('hide');
});
window.addEventListener('click', function(e) {
	if (e.target.id != 'cart' && e.target.parentElement.id != 'cart') {
		cartMenu.classList.add('hide');
	}
});

drawCart();
