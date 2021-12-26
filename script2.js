let products_container = document.querySelector('.products_container');
let button_with_clipart = document.querySelector('.button_with_clipart');
let form_for_button = document.querySelector('.form_for_button');
let form_container = document.querySelector('.form_container');
let total_price_html = document.querySelector('.price_value');

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
            <p class="product_text price"><span class="product_text_bold">Price: </span>${json.products[i].price}</p>
            <p class="product_text"><span class="product_text_bold">Description: </span>${json.products[i].description}</p>
            <a href="#" class="product_link">Seller profile</a>
            <input type="submit" class="submit" value="Buy">
        </div>
        `
    }

    let button_buy = document.querySelectorAll('.submit');
    let product_img = document.querySelectorAll('.product_img');
    let product_title = document.querySelectorAll('.product_title');
    let price = document.querySelectorAll('.price');
    let total_price = 0;

    for(let i=0; i<button_buy.length; i++){

        button_buy[i].onclick = function(e){
            e.preventDefault();
            console.log('work')
    
            let point_name = product_title[i].innerText;
            let point_img = product_img[i].getAttribute('src');
            let point_price = price[i].innerHTML.split('<span class="product_text_bold">Price: </span>')
            total_price += Number(point_price[1])
          //  total_price_html.innerText = total_price;
            console.log(total_price)
            let arr;
            if(localStorage.length == 0){
                arr=[];
            } else {
                arr = JSON.parse(localStorage.getItem("cart"));
            }
            arr.push({
                name: point_name,
                img: point_img,
                price: point_price
            });
            localStorage.setItem('cart', JSON.stringify(arr));
            form_container.innerHTML = `
            ${arr.map(elem=>`
                <div class="form_container_card">
                <img src="${elem.img}" alt="" class="card_img">
                    <p class="card_name">${elem.name}</p>
                </div>
            `)}

            <div class="total_price">Total price: <span class="price_value">${total_price}</span></div>
            
            `
        }
    
    }
})

button_with_clipart.onclick = function(e){
    e.preventDefault();

    console.log(form_for_button.getAttribute('data-status'))

    if(form_for_button.getAttribute('data-status') == 'invisible'){
        form_for_button.classList.remove('invisible');
        form_for_button.setAttribute('data-status', 'dis')
    }else{
        form_for_button.classList.add('invisible');
        form_for_button.setAttribute('data-status', 'invisible')
    }
}
