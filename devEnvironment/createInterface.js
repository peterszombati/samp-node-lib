const fs = require('fs');
const path = require('path');

const txt = fs.readFileSync(path.join(process.cwd(), 'scripts', 'src.txt')).toString().split(/\r?\n/).filter(l => l.trim().indexOf('static') === 0);

function splitter(str) {
    let params = [];
    let param = '';
    let inBoolean = false;
    for (let i = 0; i < str.length; i++) {
        const c = str.charAt(i);
        if (c === '(') {
            inBoolean = true;
        }
        if (c === ')') {
            inBoolean = false;
        }
        if (inBoolean) {
            param += c;
        } else {
            if (c === ',') {
                params.push(param.trim());
                param = '';
            } else {
                param += c;
            }
        }
    }
    if (param.length > 0) {
        params.push(param.trim());
    }
    return params;
}

const data = txt.map(line => {
    let tag = null, params = null, returnType = null;
    if (line.indexOf('nativeName:') >= 0) {
        tag = line.split('nativeName:').slice(-2)[0].split(' ').slice(-1)[0].split('(').slice(-2)[0];
        params = line.split(tag+'(').slice(-1)[0].split('):').slice(0,-1).join('');
        returnType = line.split(tag+'(').slice(-1)[0].split('):').slice(-1)[0];
    } else if (line.indexOf('on(eventName:') >= 0) {
        params = line.split('on(').slice(-1)[0].split('):').slice(0,-1).join('');
        tag = 'on';
        returnType = line.split('on(').slice(-1)[0].split('):').slice(-1)[0];
    } else {
        return null;
    }
    params = splitter(params);
    return {
        tag,
        params,
        returnType: returnType.split(';')[0].trim()
    }
}).filter((d) => d !== null);

fs.writeFileSync(path.join(process.cwd(), 'scripts', 'interface.json'), JSON.stringify(data.map(d => {
    return {
        ...d,
        params: d.params.map(p => {
            return [p.split(':')[0],p.split(':').slice(1,p.split(':').length).join(':').trim()]
        })
    }
}), null, '\t'))