
let text_element = document.getElementById('text');

fetch('http://my-json-server.typicode.com/robocodebr/lesson14/db')
.then(function(data){
    return data.json();
})
.then(function(data){
    text_element.innerHTML += data.user[0].user + '<br>' + data.user[0].age + '<br>' + data.user[0].gander + '<br>';
    for(let i=0; i<data.products.length; i++){
        console.log(data.products[i])
        text_element.innerHTML += data.products[i].product + '<br>' + data.products[i].price + '<br>';
    }
})
