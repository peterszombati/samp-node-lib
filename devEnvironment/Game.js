const fs = require("fs")
const path = require("path")

const interface = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'devEnvironment', 'interface.json')).toString())
let result = "import {SampPlayer} from \"./SampPlayer\"\n" +
    "import {SampVehicle} from \"./SampVehicle\"\n"
const imports = []
const funcs = []
for (let {tag,params} of interface) {
    if (tag !== 'on' || params[0][1] === 'string') {
        continue
    }
    const name = params[0][1].split("'")[1]
    params = params.slice(1)
    imports.push(name)
    funcs.push('    '+ name +'(func: '+params[0][1].replace('killerid: number', 'killer: SampPlayer<P>').replace('playerid: number', 'player: SampPlayer<P>').replace('playerid: number', 'player: SampPlayer<P>').replace('vehicleid: number', 'vehicle: SampVehicle<V>')+') {\n' +
        '        return '+ name +'(func)\n' +
        '    }')
}
result += 'import {' + imports.join(',') + '} from \'./SampEvents\'\nexport class Game<P,V> {\n' +  funcs.join('') + '\n}'
fs.writeFileSync(path.join(process.cwd(), 'src', 'Game.ts'), result)