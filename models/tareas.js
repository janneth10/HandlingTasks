const { v4: uuidV4 } = require('uuid');

class Tarea {
    id = '';
    description = '';
    completedDate = null;

    constructor( description ){
        this.id = uuidV4();
        this.description = description;
        this.completedDate = null;
    }
}

module.exports = Tarea;