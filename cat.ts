const fs = require('fs');

process.argv.forEach((argv, index) => {
    switch (index) {
        case 0:
        case 1:
            break;
        default:
            const text = fs.readFileSync(argv);
            process.stdout.write(text);
    }
});

