const Base = require('./base')

class topicModels extends Base {
    constructor(props = 'topic'){
        super(props);
    }
}


module.exports = new topicModels();