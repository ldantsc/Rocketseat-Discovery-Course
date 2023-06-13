const url = "http://localhost:5500/api";

const newUser = {
    name: "Olivia",
    avatar: "http//picsum.photos/200/300",
    city: "Rio do Sul",
}

//GET
function getUsers() {
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(err => console.error(err))
}
//GET com parametros
function getUser() {
    fetch(`${url}/1`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar   
    })
    .catch(err => console.error(err))
}
//POST
function addUser(newUser) {
    /*url + objeto
    metodo padrão = "GET", passar para POST
    fetch pega o que tem no body e envia para url
    JSON.stringify para transformar em texto de JSON 
    */
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(err => console.error(err))
}


addUser(newUser)

getUsers()
getUser()