const managerModels = require('../models/manager')
const userModels = require('../models/user')
const authcode = require('../utils/authcode')
const config = require('../config');
const axios = require('axios')

const authController ={
    login: async function(req,res,next){
        let phone = req.body.phone;
        let password = req.body.password;
        if(!phone || !password){
            res.json({
                code:0,
                message:'缺少参数'
            })
            return
        }
        try{
            let manageres= await managerModels
                .where({phone,password})
            let manager = manageres.length > 0 
            if(!manager){
                res.json({
                    code:0,
                    message: '手机号或密码错误'
                })
                return
            }
            let encryption = manageres[0].phone+'/t'+manageres[0].name+'/t'+manageres[0].id
            let token = authcode(encryption,'INCODE')
            res.json({
              code:200,
              name:manageres[0].name,
              token:token
            })
        }
        catch(err){
            console.log(err)
            res.json({
                code:0,
                message:'服务器错误'
            })
        }
    },
    wxLogin: async function(req,res,next){
        let appid = config.wechat.appid;
        let secret = config.wechat.secret;
        let js_code = req.body.code;
        let userInfo = req.body.userInfo;
        try{
            let data = await axios.get(`https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${js_code}&grant_type=authorization_code`);
            let openid = data.data.openid;
            if(!openid || openid.length !== 28){
                res.json({
                    code:0,
                    message:'服务器错误'
                })
                return
            }
            let user = await userModels.where({openid})
            let id
            if(user[0]){
                id = user[0].id
            }else{
            // 储存数据库
                let array = await userModels
                .return({nick_name:userInfo.nickName,openid,
                sex:userInfo.gender,avatar:userInfo.avatarUrl})
                id = array[0]
            }
            res.json({
                code:200,
                data:id
            })
        }catch(err){
            console.log(err)
            res.json({
                code:0,
                message:'服务器错误'
            })
        }
    }

}
module.exports = authController;