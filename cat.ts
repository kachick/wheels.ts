const fs = require('fs');

process.argv.forEach((argv: string, index: number) => {
    switch (index) {
        case 0:
        case 1:
            break;
        default:
            const text: string = fs.readFileSync(argv);
            process.stdout.write(text);
    }
});
