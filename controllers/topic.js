const topicModels = require('../models/topic')
const answerModels = require('../models/answer')
const {formatDate} = require('../utils/formatDate');

const topicController = {
  insert: async function(req,res,next){
    let title = req.body.title
    let category_id = req.body.category_id
    let text = req.body.text
    if(!title || !category_id || !text){
      res.json({
        code:0,
        message:'缺少参数'
      })
      return
    }

    try{
      await topicModels.insert({title,category_id,text})
      res.json({
        code:200,
        message:'增加成功'
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'增加失败'
      })
    }
  },
  update: async function(req,res,next){
    let id = req.params.id
    let title = req.body.title
    let category_id = req.body.category_id
    let text = req.body.text
    if(!title || !category_id || !text){
      res.json({
        code:0,
        message:'缺少参数'
      })
      return
    }
    try{
      await topicModels.update(id,{title,category_id,text})
      res.json({
        code:200,
        message:'修改成功'
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:"修改失败"
      })
    }
  },
  all: async function(req,res,next){
    try{
      let pageSize = req.query.pageSize || 10 // 显示每页数量
      let nowPage= req.query.nowPage || 1  // 显示当前页数
      let offset = (nowPage-1)*pageSize   // 从多少条开始拿
      let filter = req.query.filter
      let topic
      let totals
      if(filter){
        topic = await topicModels.where({category_id:filter})
          .leftJoin('category','topic.category_id','category.id')
          .column('topic.id','topic.title','topic.text','category.name',
            'topic.pv','topic.follow','topic.answer_num')
          .offset(offset)
          .limit(pageSize)
        totals = await topicModels.where({category_id:filter})
      }else{
        topic = await topicModels.all()
        .leftJoin('category','topic.category_id','category.id')
        .column('topic.id','topic.title','topic.text','category.name',
          'topic.pv','topic.follow','topic.answer_num')
        .offset(offset)
        .limit(pageSize)
        totals = await topicModels.all()
      }
      let total = totals.length

      res.json({
        code:200,
        data:topic,
        total:total
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'查找失败'
      })
    }
  },
  delete: async function(req,res,next){
    let id = req.params.id
    try{
      await topicModels.delete(id)
      res.json({
        code:200,
        message:"删除成功"
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'删除失败'
      })
    }
  },
  single: async function(req,res,next){
    let id = req.params.id
    if(isNaN(id)){
      res.json({
        code:0,
        message:'查询出错'
      })
      return
    }
    try{
      let topic = await topicModels.where({'topic.id':id})
        .leftJoin('category','topic.category_id','category.id')
        .column('topic.id','category.name','topic.category_id','topic.title','topic.text','topic.pv',
        'topic.follow','topic.answer_num','topic.show_answer')
      let answer_id = topic[0].show_answer
      let answer = await answerModels.where({'answer.id':answer_id})
        .leftJoin('user','answer.user_id','user.id')
        .column('answer.id','user.nick_name','answer.text','answer.create_time',
        'answer.praise','answer.collect')
        answer.forEach(data=>{
          data.create_time = formatDate(data.create_time)
        })
      res.json({
        code:200,
        data:topic[0],
        answer:answer[0]
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'查找失败'
      })
    }
  },
  showAnswer: async function(req,res,next){
    let id = req.params.id
    let answer_id = req.body.answer_id
    try{
      await topicModels.update(id,{show_answer:answer_id})
      res.json({
        code:200,
        message:'展示成功'
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'展示失败'
      })
    }
  }
}

module.exports = topicController;