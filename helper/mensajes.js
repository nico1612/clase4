const { default: inquirer } = require('inquirer');

require('colors')

const mostrarMenu=()=>{
    return new Promise(resolve=>{
        console.clear();
        console.log("==========".green);
        console.log("mostrar una opción".green);
        console.log("==========\n".green);
    
        console.log(`${'1'.green}. crear tarea`)
        console.log(`${'2'.green}. listar tareas`)
        console.log(`${'3'.green}. listar tares completas`)
        console.log(`${'4'.green}. listar tareas incompletas`)
        console.log(`${'5'.green}. completar tarea(s)`)
        console.log(`${'6'.green}. borrar tarea`)
        console.log(`${'0'.green}. salir\n`)
        
        const readline=require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        })
        readline.question('seleccione una opcion:',(ops)=>{
            readline.close();
            resolve(ops);
        })
    
    })
}

const pausa=()=>{
    return new Promise(resolve=>{
        const readline=require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        })
        readline.question(`seleccione ${'ENTER'}.red para continuar:`,(ops)=>{
            readline.close();
            resolve(ops);
        })
    })
}
const leerInput= async(message)=>{

    const question=[{
            type:'input',
            name:'desc',
            message,
            validate(value){
                if(value.length===0){
                    return 'por favor ingrese un valor'
                }
                return true
            }
        }
    ]
    const {desc}=await inquirer.prompt(question)
    return desc
}
module.exports={
    mostrarMenu,
    pausa,
    leerInput
}