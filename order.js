const api_key = '78e1419893bbd454aca2ee6a329e7ed3f35fc';
let url = 'https://products-94d2.restdb.io/rest/prykhodko-order';
let cartMenu = document.getElementById('card-products');

function buyAll() { 
    localStorage.clear();
    cartMenu.innerHTML = 'Card is empty';

    // let json = [{}];

    // let options = {
    //     method: 'POST',
    //     header : new Headers({
    //         'content-type': 'application/json',
    //         'x-apikey': api_key,
    //         'cache-control': 'no-cache'
    //     }),
    //     body: JSON.stringify(json)
    // }

    // fetch(url, options)
    // .then(function(data){
    //     return data.json();
    // })
    // .then(function(json){

    // })

    let xhr = new XMLHttpRequest();

    xhr.open("POST", url);
    xhr.setRequestHeader('content-type': 'application/json')

}