const api_key = "78e1419893bbd454aca2ee6a329e7ed3f35fc";

function buyAll() { 
    cartMenu.innerHTML = 'Card is empty';

    let data = JSON.stringify(localStorage.getItem('cart'));
      
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          console.log(this.responseText);
        }
      });
      let collection = "surname-order"
      xhr.open("POST", "https://products-94d2.restdb.io/rest/"+collection);
      xhr.setRequestHeader("content-type", "application/json");
      xhr.setRequestHeader("x-apikey", api_key);
      xhr.setRequestHeader("cache-control", "no-cache");
      
      xhr.send(data);
      

      localStorage.clear();

}