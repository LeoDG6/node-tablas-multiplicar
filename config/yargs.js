const colors = require('colors');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'.yellow
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Este es número hasta donde quieres la tabla'.yellow
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'.yellow
    })
    .check( (argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número'.red
        }
        return true;
    })
    .argv;

module.exports = argv;