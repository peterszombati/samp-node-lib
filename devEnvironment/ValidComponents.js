const path = require('path')
const fs = require('fs')

const txt = fs.readFileSync(path.join(process.cwd(), 'devEnvironment', 'wiki_archive', 'all_valid_components.txt'))
    .toString()
    .split(/\r?\n/)
    .map(i => i.trim().split(':'))
    .filter(i => i.length === 2)

const result = {}
for (const [vehicle, ids] of txt) {
    const numbers = ids.trim().split(',').map(i => parseInt(i.trim(), 10))
    const modelId = vehicle.split('(').length === 2
        ? parseInt(vehicle.split('(')[1].split(')')[0].trim(), 10)
        : parseInt(vehicle.split('(')[2].split(')')[0].trim(), 10)
    if (isNaN(modelId)) {
        throw new Error(JSON.stringify([vehicle, ids]))
    }
    result[modelId] = numbers
}

fs.writeFileSync(path.join(process.cwd(), 'src', 'ValidComponents.ts'), 'export default ' + JSON.stringify(result))