const recommendModels = require('../models/recommend')
const topicModels = require('../models/topic')

const recommendController = {
  recommend: async function(req,res,next){
    try{
      let topicIds = await recommendModels.where({table_id:1})
      let topicId = topicIds.map(data=>{
        return data.topic_id
      })
      let data = await topicModels.whereIn('topic.id',topicId)
        .leftJoin('category','topic.category_id','category.id')
        .column({'topic_id':'topic.id'},{'category_id':'category.id'},'category.name','topic.title',
        'topic.pv','topic.follow','topic.answer_num')
      res.json({
        code:200,
        data
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:"服务器错误"
      })
    }
  },
  unRecommend: async function(req,res,next){
    let pageSize = req.query.pageSize || 10 // 显示每页数量
    let nowPage= req.query.nowPage || 1  // 显示当前页数
    let offset = (nowPage-1)*pageSize   // 从多少条开始拿
    try{
      let topicIds = await recommendModels.where({table_id:1})  
      let topicId = topicIds.map(data=>{
        return data.topic_id
      })
      let data = await topicModels.whereNotIn('topic.id',topicId)
        .leftJoin('category','topic.category_id','category.id')
        .column({'topic_id':'topic.id'},{'category_id':'category.id'},'category.name','topic.title',
        'topic.pv','topic.follow','topic.answer_num')
        .offset(offset)
        .limit(pageSize)
      let totals = await topicModels.whereNotIn('topic.id',topicId)
      let total = totals.length
      res.json({
        code:200,
        data,
        total
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:"服务器错误"
      })
    }
  },
  answer: async function(req,res,next){
    try{
      let topicIds = await recommendModels.where({table_id:2})
      let topicId = topicIds.map(data=>{
        return data.topic_id
      })
      let data = await topicModels.whereIn('topic.id',topicId)
        .leftJoin('category','topic.category_id','category.id')
        .column({'topic_id':'topic.id'},{'category_id':'category.id'},'category.name','topic.title',
        'topic.pv','topic.follow','topic.answer_num')
      res.json({
        code:200,
        data
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:"服务器错误"
      })
    }
  },
  unAnswer: async function(req,res,next){
    let pageSize = req.query.pageSize || 10 // 显示每页数量
    let nowPage= req.query.nowPage || 1  // 显示当前页数
    let offset = (nowPage-1)*pageSize   // 从多少条开始拿
    try{
      let topicIds = await recommendModels.where({table_id:2})  
      let topicId = topicIds.map(data=>{
        return data.topic_id
      })
      let data = await topicModels.whereNotIn('topic.id',topicId)
        .leftJoin('category','topic.category_id','category.id')
        .column({'topic_id':'topic.id'},{'category_id':'category.id'},'category.name','topic.title',
        'topic.pv','topic.follow','topic.answer_num')
        .offset(offset)
        .limit(pageSize)
      let totals = await topicModels.whereNotIn('topic.id',topicId)
      let total = totals.length
      res.json({
        code:200,
        data,
        total
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:"服务器错误"
      })
    }
  },
  insert:async function(req,res,next){
    let params = req.body.params
    if(!params){
      res.json({
        code:0,
        message:'缺少参数'
      })
      return
    }
    try{
      await recommendModels.insert(params)
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
  deleted: async function(req,res,next){
    let params = req.body.params
    if(!params){
      res.json({
        code:0,
        message:'缺少参数'
      })
      return
    }
    try{
      await recommendModels.whereIn(['table_id','topic_id'],params).del()
      res.json({
        code:200,
        message:'删除成功'
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'服务器错误'
      })
    }
  },
  wxRecommend: async function(req,res,next){
    try{
      let topicIds = await recommendModels.where({table_id:1})
      let topicId = topicIds.map(data=>{
        return data.topic_id
      })
      let topic = await topicModels.whereIn('topic.id',topicId)
        .leftJoin('answer','topic.show_answer','answer.id')
        .column('topic.id','topic.title','topic.follow','topic.answer_num',
        'answer.user_id','answer.text')
        .leftJoin('user','answer.user_id','user.id')
        .column('user.nick_name','user.avatar')
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
  wxAnswer: async function(req,res,next){
    try{
      let topicIds = await recommendModels.where({table_id:2})
      let topicId = topicIds.map(data=>{
        return data.topic_id
      })
      let topic = await topicModels.whereIn('topic.id',topicId)
        .leftJoin('answer','topic.show_answer','answer.id')
        .column('topic.id','topic.title','topic.follow','topic.answer_num',
        'answer.user_id','answer.text')
        .leftJoin('user','answer.user_id','user.id')
        .column('user.nick_name','user.avatar')
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
  }
}

module.exports = recommendController;