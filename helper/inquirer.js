const inquirer=require('inquirer')
require('colors')
const preguntas=[
    {
        type:'list',
        name:'options',
        massege:'¿que desea hacer?',
        choices:[
            {
                value:'1',
                name:`${'1.'.green} Crear tarea`
            },
            {
                value:'2',
                name:`${'2'.green}. listar tareas`
            },
            {
                value:'3',
                name:`${'3'.green}. listar tares completas`
            },
            {
                value:'4',
                name:`${'4'.green}. listar tareas incompletas`
            },
            {
                value:'5',
                name:`${'5'.green}. completar tarea(s)`
            },
            {
                value:'6',
                name:`${'6'.green}. borrar tarea`

            },
            {
                value:'0',
                name:`${'0'.green}. salir\n`

            }
        ]
    }
]
const inquirerMenu=async() =>{
    console.clear()
    console.log('===========')
    console.log('seleccione una opción')
    console.log('===========')

   return await inquirer.prompt(preguntas)
    
}

const pausa = async() => {
    
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'enter'.green } para continuar`
        }
    ];

    console.log('\n');
    await inquirer.prompt(question);
}
module.exports={
    inquirerMenu,
    pausa
}