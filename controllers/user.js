const userModels = require('../models/user')
const user_topicModels = require('../models/user_topic')
const user_answerModels = require('../models/user_answer')
const replyModels = require('../models/reply')
const answerModels = require('../models/answer')
const {formatDate} = require('../utils/formatDate');

const userController ={
    single: async function(req,res,next){
        let id = req.params.id;
        try{
            let singles = await userModels.single(id)
            let single = singles[0]
            res.json({
                code:200,
                data:single,
            })
        }
        catch(err){
            console.log(err)
            res.json({
                code:0,
                message:'查找失败'
            })
        }
    },
    moreSingle:async function(req,res,next){
        let id = req.params.id;
        try{
            let topic = await userModels.where({"user.id":id})
                .leftJoin('user_topic','user.id','user_topic.user_id')
                .column({'topic_id':'user_topic.topic_id'})
                .leftJoin('topic','topic_id','topic.id')
                .column('topic.title','topic.category_id','topic.pv','topic.follow','topic.answer_num','topic.text')
                .leftJoin('category','topic.category_id','category.id')
                .column({'category_name':'category.name'})
            let collect = await user_answerModels.where({'user_answer.user_id':id,'user_answer.type':2})
                .leftJoin('answer','user_answer.answer_id','answer.id')
                .column({'topic_id':'answer.topic_id'},'answer.text','answer.create_time','answer.praise','answer.collect')
                .leftJoin('topic','topic_id','topic.id')
                .column('topic.title')
            collect.forEach(data=>{
                data.create_time = formatDate(data.create_time)
            })
            let answer = await answerModels.where({'answer.user_id':id})
                .leftJoin('topic','answer.topic_id','topic.id')
                .column('answer.id','answer.text','topic.title','answer.create_time','answer.praise','answer.collect')
            answer.forEach(data=>{
                data.create_time = formatDate(data.create_time)
            })
            res.json({
                code:200,
                data:{
                    topic,
                    collect,
                    answer
                }
            })
        }catch(err){
            console.log(err)
            res.json({
                code:0,
                message:'服务器错误'
            })
        }
    },
    all: async function(req,res,next){
        try{
            let totals = await userModels.all()
            let total = totals.length
            let females = await userModels.where({sex:2})
            let female =  females.length
            let pregnants = await userModels.where({state:2})
            let pregnant =  pregnants.length
            let breds = await userModels.where({state:3})
            let bred = breds.length
            res.json({
                code:200,
                data:{
                    total,female,pregnant,bred
                }
            })
        }
        catch(err){
            console.log(err)
            res.json({
                code:0,
                message:'查找失败'
            })
        }
    },
    user: async function(req,res,next){
        try{
            let pageSize = req.query.pageSize || 10 // 显示每页数量
            let nowPage= req.query.nowPage || 1  // 显示当前页数
            let offset = (nowPage-1)*pageSize   // 从多少条开始拿

            let user = await userModels.all()
                .offset(offset)
                .limit(pageSize)

            let totals = await userModels.all()
            let total = totals.length
            res.json({
                code:200,
                data:user,
                total:total
            })
        }catch(err){
            console.log(err)
            res.json({
                code:200,
                message:'查找失败'
            })
        }
    },
    update: async function(req,res,next){
        let nick_name = req.body.nick_name;
        let sex = req.body.sex;
        let avatar = req.body.avatar;
        let state = req.body.state
        let id = req.params.id;
        let params={}
        if(nick_name)params.nick_name = nick_name
        if(sex)params.sex = sex
        if(avatar)params.avatar = avatar
        if(state)params.state = state
        try{
            await userModels.update(id,params)
            res.json({
                code:200,
                message:'修改成功'
            })
        }
        catch(err){
            console.log(err)
            res.json({
                code:0,
                message:'修改失败'
            })
        }
    },
    delete: async function(req,res,next){
        let id = req.params.id
        try{
            await userModels.delete(id)
            res.json({
                code:200,
                message:'删除成功'
            })
        }catch(err){
            console.log(err)
            res.json({
                code:0,
                message:'删除失败'
            })
        }
    },
    follow: async function(req,res,next){
			let id = req.params.id
			try{
				let topic = await user_topicModels.where({'user_topic.user_id':id})
					.leftJoin('topic','user_topic.topic_id','topic.id')
					.column('topic.id','topic.title','topic.follow','topic.answer_num')
				res.json({
					code:200,
					data:topic
				})
			}catch(err){
				console.log(err)
				res.json({
					code:0,
					message:'服务器错误'
				})
			}
    },
    collect: async function(req,res,next){
        let id = req.params.id
        try{
            let answer = await user_answerModels.where({'user_answer.user_id':id,type:2})
                .leftJoin('answer','user_answer.answer_id','answer.id')
                .column('answer.id','answer.user_id','answer.text','answer.create_time',
                'answer.praise','answer.collect')
                .leftJoin('user','answer.user_id','user.id')
                .column('user.nick_name','user.avatar')

            let answer_id = answer.map(data=>{return data.id})
            let reply = await replyModels.whereIn('answer_id',answer_id)
            let praise = await user_answerModels.where({user_id:id,type:1}).whereIn('answer_id',answer_id)
            let answer_val = answer.map(data=>{
                let replyTotal = 0
                reply.forEach(arr =>{
                    if(arr.answer_id == data.id){
                        replyTotal += 1
                    }
                })
                let active = praise.some(item=>
                    data.id == item.answer_id
                )
                data.active = active
                data.replyTotal = replyTotal
                return data
            })
                res.json({
                    code:200,
                    data:answer_val
                })
        }catch(err){
            console.log(err)
            res.json({
                code:0,
                message:'服务器错误'
            })
        }
    },
    send: async function(req,res,next){
        let id = req.params.id
        try{
            let answer = await answerModels.where({'answer.user_id':id})
                .leftJoin('user','answer.user_id','user.id')
                .column('answer.id','answer.user_id','answer.text','answer.create_time',
                'answer.praise','answer.collect','user.nick_name','user.avatar')

            let answer_id = answer.map(data=>{return data.id})
            let reply = await replyModels.whereIn('answer_id',answer_id)
            let praise = await user_answerModels.where({user_id:id,type:1}).whereIn('answer_id',answer_id)
            let answer_val = answer.map(data=>{
                let replyTotal = 0
                reply.forEach(arr =>{
                    if(arr.answer_id == data.id){
                        replyTotal += 1
                    }
                })
                let active = praise.some(item=>
                    data.id == item.answer_id
                )
                data.active = active
                data.replyTotal = replyTotal
                return data
            })
                res.json({
                    code:200,
                    data:answer_val
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
module.exports = userController;