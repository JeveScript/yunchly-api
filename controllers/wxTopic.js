const topicModels = require('../models/topic')
const answerModels = require('../models/answer')
const replyModels = require('../models/reply')
const user_topicModels = require('../models/user_topic')
const user_answerModels = require('../models/user_answer')

const wxTopicController={
  all:async function(req,res,next){
    let nowPage = Number(req.query.nowPage) || 0
    let id = Number(req.query.id)
    try{
      let topic
      if(id === 0 ){
        topic = await topicModels.all()
        .leftJoin('answer','topic.show_answer','answer.id')
        .column('topic.id','topic.title','topic.follow','topic.answer_num',
        'answer.user_id','answer.text')
        .leftJoin('user','answer.user_id','user.id')
        .column('user.nick_name','user.avatar')
        .offset(nowPage)
        .limit(10)
      }else{
        topic = await topicModels.where({'topic.category_id':id})
        .leftJoin('answer','topic.show_answer','answer.id')
        .column('topic.id','topic.title','topic.follow','topic.answer_num',
        'answer.user_id','answer.text')
        .leftJoin('user','answer.user_id','user.id')
        .column('user.nick_name','user.avatar')
        .offset(nowPage)
        .limit(10)
      }
      res.json({
        code:200,
        data:topic,
        pages:nowPage
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'查找错误'
      })
    }
  },
  title:async function(req,res,next){
    let id = req.params.id
    try{
      let title = await topicModels.where({id}).column('topic.title')
      res.json({
        code:200,
        data:title[0]
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:"服务器错误"
      })
    }
  },
  single:async function(req,res,next){
    let nowPage = Number(req.query.nowPage) || 0
    let user_id = req.query.user_id
    let topic_id = req.params.id
    try{
      let topic = await topicModels.where({'topic.id':topic_id})
        .leftJoin('category','topic.category_id','category.id')
        .column('topic.id','category.name',{'category_id':'category.id'},'topic.title',
        'topic.text','topic.pv','topic.follow','topic.answer_num')
      let answer = await answerModels.where({'answer.topic_id':topic_id})
        .leftJoin('user','answer.user_id','user.id')
        .column('answer.id','user.nick_name','user.avatar','answer.text','answer.praise')
        .offset(nowPage)
        .limit(10)
      let answer_id = answer.map(data=>{return data.id})
      let reply = await replyModels.whereIn('answer_id',answer_id)
      let praise = await user_answerModels.where({user_id:user_id,type:1}).whereIn('answer_id',answer_id);
      let repeat = await user_topicModels.where({topic_id,user_id});
      let follow = false;
      repeat.length ? follow = true : follow = false;
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
        topic:topic[0],
        answer:answer_val,
        nowPage:nowPage,
        follow
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'查找错误'
      })
    }
  },
  pv:async function(req,res,next){
    let topic_id = req.body.id
    try{
      await topicModels.where({id:topic_id}).increment('pv',1)
      res.json({
        code:200,
        message:'调用成功'
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'服务器错误'
      })
    }
  },
  follow:async function(req,res,next){
    let topic_id = req.body.topic_id
    let user_id  = req.body.user_id
    try{
      let repeat = await user_topicModels.where({topic_id,user_id})
      if(repeat.length){
        res.json({
          code:200,
          message:'请勿重复关注'
        })
        return
      }
      await topicModels.where({id:topic_id}).increment('follow',1)
      await user_topicModels.insert({user_id,topic_id})
      res.json({
        code:200,
        message:'关注成功'
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

module.exports = wxTopicController;