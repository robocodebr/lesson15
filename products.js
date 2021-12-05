let productsElement = document.getElementById('products')

fetch('http://my-json-server.typicode.com/RobocodeSchool/marketplace/db')
.then(function (data) {
    return data.json()
})
.then(function (data) {
    
})