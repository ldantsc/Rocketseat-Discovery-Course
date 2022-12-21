
const flag = process.argv[3]

function getFlag(flag) {
    if (process.argv[2] == '--name') {
        return process.argv[3]
    } else 
    console.log('Digite a flag --name')
}

module.exports = getFlag;