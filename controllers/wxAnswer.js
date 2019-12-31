const topicModels = require('../models/topic')
const answerModels = require('../models/answer')
const replyModels = require('../models/reply')
const user_topicModels = require('../models/user_topic')
const user_answerModels = require('../models/user_answer')
const {formatDate} = require('../utils/formatDate');

const wxAnswerController = {
  praise:async function(req,res,next){
    let user_id = req.body.user_id
    let answer_id  = req.body.answer_id
    try{
      await user_answerModels.insert({user_id,answer_id,type:1})
      await answerModels.where({id:answer_id}).increment('praise',1)
      res.json({
        code:200,
        message:'点赞成功'
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'服务器错误'
      })
    }
  },
  unpraise: async function(req,res,next){
    let user_id = req.body.user_id
    let answer_id  = req.body.answer_id
    try{
      let id = await user_answerModels.where({user_id,answer_id,type:1})
      await user_answerModels.delete(id[0].id)
      await answerModels.where({id:answer_id}).decrement('praise',1)
      res.json({
        code:200,
        message:'取消成功'
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'服务器错误'
      })
    }
  },
  collect:async function(req,res,next){
    let user_id = req.body.user_id
    let answer_id  = req.body.answer_id
    try{
      await user_answerModels.insert({user_id,answer_id,type:2})
      await answerModels.where({id:answer_id}).increment('collect',1)
      res.json({
        code:200,
        message:'收藏成功'
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'服务器错误'
      })
    }
  },
  unCollect: async function(req,res,next){
    let user_id = req.body.user_id
    let answer_id  = req.body.answer_id
    try{
      let id = await user_answerModels.where({user_id,answer_id,type:2})
      await user_answerModels.delete(id[0].id)
      await answerModels.where({id:answer_id}).decrement('collect',1)
      res.json({
        code:200,
        message:'取消成功'
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'服务器错误'
      })
    }
  },
  single: async function(req,res,next){
    let answer_id = req.params.id
    let user_id = req.query.user_id
    try{
      let answerArray = await answerModels.where({'answer.id':answer_id})
        .leftJoin('topic','answer.topic_id','topic.id')
        .column({'answer_id':'answer.id'},'answer.user_id','answer.text','answer.create_time',
        'answer.praise','answer.collect',{'topic_id':'topic.id'},'topic.title','topic.answer_num')
        .leftJoin('user','answer.user_id','user.id')
        .column('user.nick_name','user.avatar')
      let answer = answerArray[0]
      answer.create_time = formatDate(answer.create_time)
      
      let praise = await user_answerModels.where({user_id,answer_id,type:1})
      praise.length ? answer.praiseActive = true : answer.praiseActive = false 
      let collect = await user_answerModels.where({user_id,answer_id,type:2})
      collect.length ? answer.collectActive = true : answer.collectActive = false 

      let reply = await replyModels.where({'reply.answer_id':answer_id})
        .leftJoin('user','reply.user_id','user.id')
        .column('reply.id','user.nick_name','user.avatar','reply.text','reply.create_time')
        .orderBy('reply.create_time',"desc")
      reply.forEach(data=>{
        data.create_time ?  data.create_time = formatDate(data.create_time) : null
      })

      res.json({
        code:200,
        data:{
          answer,
          reply
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
  reply: async function(req,res,next){
    let user_id =req.body.user_id
    let answer_id = req.body.answer_id
    let text =req.body.text
    if(!text.trim()){
      res.json({
        code:0,
        message:'缺少内容'
      })
      return
    }
    try{
      await replyModels.insert({answer_id,user_id,text})
      res.json({
        code:200,
        message:'增加成功'
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'服务器错误'
      })
    }
  },
  insert: async function(req,res,next){
    let text =req.body.text
    let user_id = req.body.user_id
    let topic_id = req.body.topic_id
    try{
      let id  = await answerModels.return({user_id,topic_id,text})
      await topicModels.where({id:topic_id}).increment('answer_num',1)
      res.json({
        code:200,
        data:id[0],
        message:"增加成功"
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:"服务器出错"
      })
    }
  }
}

module.exports = wxAnswerController;