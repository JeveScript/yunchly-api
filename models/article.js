const Base = require('./base')

class articleModels extends Base {
    constructor(props = 'article'){
        super(props);
    }
}


module.exports = new articleModels();