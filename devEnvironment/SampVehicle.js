const fs = require('fs')
const path = require('path')

const interface = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'devEnvironment', 'interface.json')).toString())
let result = `export class SampVehicle {
    private vehicleId: number
    constructor(vehicleId: number) {
        this.vehicleId = vehicleId
    }
`
for (const {tag,params,returnType} of interface) {
    if (tag !== 'callNative') {
        continue
    }
    if (params.slice(2).some(i => i[0] === 'vehicleid')
    && params.slice(2).every(i => i[0] !== 'playerid')) {
        const fParams = params.slice(2).filter(i => i[0] !== 'vehicleid')
        result += `    ${params[0][1].split("'")[1]}(${fParams.map(i => `${i[0]}: ${i[1]}`).join(', ')}): ${returnType} {
        return ${params[0][1].split("'")[1]}(${params.slice(2).map(i => i[0] === 'vehicleid' ? 'this.vehicleId' : i[0]).join(', ')})
    }
`
    }
}
result += '}'

fs.writeFileSync(path.join(process.cwd(), 'src', 'SampVehicle.ts'), result)