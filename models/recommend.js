const Base = require('./base')

class recommendModels extends Base {
    constructor(props = 'recommend'){
        super(props);
    }
}


module.exports = new recommendModels(); 