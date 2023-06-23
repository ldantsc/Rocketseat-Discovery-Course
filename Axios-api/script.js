const url = "http://localhost:5500/api"

//GET
function getUsers() {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.log(error));
}

//POST
function addNewUser(newUser) {
                    //enviar os dados de um usuario
    axios.post(url, newUser)
    .then(response => {
        console.log(response)
    })
    .catch(err => console.log(err))
}


//GET com PARAMETROS
function getUser(id) {
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data
        userName.textContent = data.name
        userCity.textContent = data.city
        userID.textContent = data.id
        userAvatar.src = data.avatar
    })
    .catch(error => console.log(error))
}

//PUT

function updateUser(id, user) {
            //passar a url e id que vai ser atualizado
    axios.put(`${url}/${id}`, user )
    .then(response => {
        console.log(response)
    })
    .catch(err => console.log(err))
}

// DELETE
function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then(response => {
        console.log(response)
    })
    .catch(err => console.log(err))
}

getUsers()
getUser(1)

const user1 = {
    name: "Lucas",
    avatar: "https://picsum.photos/200/300",
    city: "São paulo" 
}

const user2 = {
    name: "Juba",
    avatar: "https://picsum.photos/200/300",
    city: "Minas Gerais" 
}

addNewUser(user1)
updateUser(3, user2)

deleteUser(1)