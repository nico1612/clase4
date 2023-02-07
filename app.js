require('colors')

const { inquirerMenu,pausa,leerInput } = require('./helper/inquirer');
const Tarea = require('./models/tarea');
const Tareas= require('./models/tareas')

console.clear()

const main= async ()=>{
    const tareas = new Tareas();
    
    let ops='';
    do{
        ops= await inquirerMenu();
        switch(ops){
            case '1':
                const desc=await leerInput('descripcion:')
                tareas.crearTarea(desc);
                console.log(desc);
                break
            case '2':
                console.log(desc)
                break
            case '3':
                break
            case '4':
                break
            case '5':
                break
            case '6':
                break
        }
        await pausa()
    }while(ops !== '0');
}

main();