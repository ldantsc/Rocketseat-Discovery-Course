const button = document.getElementById("openModal")
const div = document.querySelector('div')

button.onclick = function() {
    div.classList.remove('invisible')
    console.log("clicou")
}


document.addEventListener('keydown', function(event) {
    console.log(event)
    const isEscKey = event.key === 'Escape'

    if (isEscKey) {
        div.classList.add('invisible')
    }
})