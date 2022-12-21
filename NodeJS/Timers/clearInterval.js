//clearInterval irá cancelar um setInterval registrado

const timeOut = 1000
const checking = () => console.log('checking!')

let interval = setInterval(checking, timeOut)


//depois de 4 segundos o interval vai ser cancelado
setTimeout(() => clearInterval(interval), 4000)