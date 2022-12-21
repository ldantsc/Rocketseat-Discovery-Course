// events ja faz parte do core do nodeJs
// para usar o disparador de eventos chamando a função {EventEmitter}
const {EventEmitter} = require('events')

const ev = new EventEmitter()

// .on para ouvir o evento e .once para ouvir uma unica vez
// segundo argumento é uma função executando a ação

ev.once('saySomething', (message) => {
    console.log("Eu ouvi você: ", message)
})

//emit para disparar o evento

ev.emit('saySomething', 'Mayk')
ev.emit('saySomething', 'João')
ev.emit('saySomething', 'Camila')