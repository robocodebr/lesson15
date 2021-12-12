function drawUser(user) {
    return ` <h1>${user.name}</h1>
    <img src="${user.photo_url}" alt="${user.name} ${user.sirname}">
    <p>
        Balance: ${user.balance}
    </p>`
}
  
  
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id")
console.log(id);
if (id ==null) {
      dispatchEvent.innerHTML = "Not a user  "
}