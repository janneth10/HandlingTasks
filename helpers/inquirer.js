// la libreria inquire me permite crear apps de consola de forma mas facil e interactiva
const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'option',
        message: '¿Que desea hacer?',
        choices:  [
            {
                value: '1',
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar todas las tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir\n`
            }
        ]
    }
];

const inquirerMenu = async ()=>{

    console.clear();
    console.log('========================'.green);
    console.log(' Selecciona una opcion'.green);
    console.log('========================\n'.green);
    const { option } = await inquirer.prompt(preguntas);

    return option;
}

const pause = async()=>{

    const enter =
    [
        {
            type: 'input',
            message: `\nPresione ${'ENTER'.green} para continuar\n`,
            name: 'pausing'
        }
    ];

    console.log('\n');
    await inquirer.prompt( enter );
}

module.exports = {
    inquirerMenu,
    pause
}