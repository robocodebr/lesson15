const api_key = "78e1419893bbd454aca2ee6a329e7ed3f35fc"
function buyAll() { 
    localStorage.clear();
    cartMenu.innerHTML = 'Card is empty';

    let options = {
        method: "POST",
        header : new Headers({
            ,"content-type": "applicayion/json",
        "x-apikey": api_key,
    "cache-control": "no-cache
    "}),
        body: JSON.stringify(json)
    }
    fetch("https://products-94d2.restdb.io/rest/pavlovskaya-order")