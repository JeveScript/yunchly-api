const Base = require('./base')

class bannerModels extends Base {
    constructor(props = 'banner'){
        super(props);
    }
}


module.exports = new bannerModels();