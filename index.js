// console.log('hello');

const object = {
    node1: 'node1',
    node2: {
        node21: 'node21',
        node22: {
            node221: 'node221',
        }
    }
}

const iypnb = {
    cells: [{
        cellType: 'code',
        outputs: [{
            source: 'a',
        }]
    }, {
        cellType: 'markdown',
        source: [{
            name: 'ok',
        }]
    }],
};

const payload = {
    username: 'liu',
    filename: 'notebook',
    content: iypnb,
}

const JSONStr = JSON.stringify(payload);
console.log(JSONStr);