const path = require('path')
const fs = require('fs')

const txt = fs.readFileSync(path.join(process.cwd(), 'devEnvironment', 'wiki_archive', 'all_vehicle_component_costs.txt'))
    .toString()
    .split(/\r?\n/)
    .map(i => i.trim())
    .filter(i => i.length > 0)

const prices = txt[0].trim().split(',').map(i => parseInt(i.trim(), 10))
const result = {}
const length = 1000 + prices.length
for (let id = 1000; id < length; id++) {
    result[id] = prices[id - 1000]
}

fs.writeFileSync(path.join(process.cwd(), 'src', 'ComponentCosts.ts'), 'export default ' + JSON.stringify(result))