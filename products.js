let textElement = document.getElementById("products")
fetch("http://my-json-server.typicode.com/robocodebr/lesson14/db")
.then(function(data){
    return data.json()
})
.then(function(data) {
})