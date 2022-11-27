const button = document.getElementById("openModal")

button.addEventListener('click', buttonClick)

function buttonClick() {
    const element = document.querySelector('div')
    element.classList.remove('invisible')
    console.log("clicou")
}

    