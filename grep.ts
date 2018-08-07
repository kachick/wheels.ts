const fs = require('fs');
const pattern: RegExp = new RegExp(process.argv[2]);
const filename: string = process.argv[3];

const rs = fs.createReadStream(filename)
const readline = require('readline');
const rl = readline.createInterface(rs, {});

rl.on('line', (line: string) => {
    if (pattern.test(line)) {
        process.stdout.write(line);
    }
});