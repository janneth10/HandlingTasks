require('colors');

const mostrarMenu = ()=> {

    return new Promise((resolve) => {
        console.clear();

        console.log('========================'.green);
        console.log(' Selecciona una opcion'.green);
        console.log('========================\n'.green);
        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar todas las tareas`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tarea`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.green} Salir\n`);
    
        const readline = require ('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Seleccione una opcion: ', (opc)=>{
            readline.close();
            resolve(opc);
        });
    })
}

const pausa = ()=>{
    return new Promise((resolve) => {
        const readline = require ('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, ()=>{
            readline.close();
        })
        resolve(); 
    })
}

module.exports = {
    mostrarMenu,
    pausa
}
 