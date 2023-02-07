const { v4: uuidv4 } = require('uuid');

class tarea{
    id='';
    desc='';
    completadoEn=null;
    constructor(desc){
        this.id=uuidv4();
        this.desc=desc;
    }
}

module.exports=tarea