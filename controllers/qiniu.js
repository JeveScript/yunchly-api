const config = require('./../config');
const qiniu = require('qiniu')

const qiniuController = {
  upload:async function(req,res,next){
    try{
      const accessKey = config.qiniu.accessKey;
      const secretKey = config.qiniu.secretKey;
      const mac = new qiniu.auth.digest.Mac(accessKey,secretKey);
      
      const options = {
        scope:'ycl-hub'
      }
      var putPolicy = new qiniu.rs.PutPolicy(options);
      var uploadToken=putPolicy.uploadToken(mac);

      res.json({
        token:uploadToken,
        domain:'http://q3d5zbn7j.bkt.clouddn.com/'
      })
    }
    catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'服务器错误'
      })
    }
  }
}

module.exports = qiniuController