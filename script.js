let textElement = document.getElementById("text");

fetch("http://my-json-server.typicode.com/robocodebr/lesson14/db")
.then(function(data){
    return data.json();
})
.then(function(data) {
    textElement.innerHTML = data.user[0].user + "<br>"+data.user[0].age + "<br>"+data.user[0].gander + "<br>"

    textElement.innerHTML += data.products[0].product + "<br>" + data.products[0].price + "<br>"
    
    textElement.innerHTML += data.products[1].product + "<br>" + data.products[1].price + "<br>"
})

