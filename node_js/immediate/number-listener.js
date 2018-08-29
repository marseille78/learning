const NumberPrinter = require('./number-printer');

const printer = new NumberPrinter();

printer.onNumber = value => console.log(value);

setImmediate(() => {
    printer.print(1);
    printer.print(2);
    printer.print(3);
});