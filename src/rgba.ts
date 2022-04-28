export function rgba(value: string): number {
    const values: number[] = (value.match(/([0-9])+/g) || []).map(v => parseInt(v, 10))
    if (values.length !== 4 && values.length !== 3) {
        return 255
    }
    if (values.length === 3) {
        values.push(255)
    } else {
        values[3] = values[3] < 1 ? Math.floor(values[3] * 255) : 255
    }
    let n = 0
    values.reverse().forEach((n2, i) => {
        if (n2 !== 0) {
            n += Math.pow(16, i * 2) * n2
        }
    })
    return n
}