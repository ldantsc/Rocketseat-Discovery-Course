//clearTimeout cancela um Timeout

const timeOut = 3000
const finished = () => console.log('done!')

let time = setTimeout(finished, timeOut)
clearTimeout(time)