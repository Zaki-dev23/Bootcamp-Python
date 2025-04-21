const chalk = require('chalk')


function showMessage() {
    console.log(chalk.blue('Hello World!'));
    console.log(chalk.green.bold('Success!'));
    console.log(chalk.red.bgYellowBright('Warning Message'));
    console.log(chalk.magenta.italic('Have a nice day! '));
}

module.exports = { showMessage }

