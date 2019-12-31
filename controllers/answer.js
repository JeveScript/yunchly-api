const answerModels = require('../models/answer')
const replyModels = require('../models/reply')
const {formatDate} = require('../utils/formatDate');
const user_answerModels = require('../models/user_answer')
const topicModels = require('../models/topic')

const answerController ={
  single: async function(req,res,next){
    let id = req.params.id;
    try{
      let answer = await answerModels.where({topic_id:id})
        .leftJoin('user','answer.user_id','user.id')
        .column('answer.id','user.nick_name','answer.text','answer.create_time',
        'answer.praise','answer.collect')
        answer.forEach(data=>{
          data.create_time = formatDate(data.create_time)
        })

      res.json({
        code:200,
        data:answer
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
  delete: async function(req,res,next){
    let id =req.params.id
    try{
      let datas = await answerModels.where({id})
      let topic_id = datas[0].topic_id
      await answerModels.delete(id)
      await replyModels.where({'answer_id':id}).del()
      await user_answerModels.where({'answer_id':id}).del()
      await topicModels.where({id:topic_id}).decrement('answer_num',1)
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
  today: async function(req,res,next){
    try{
      let answer = await answerModels.all()
        .leftJoin('user','answer.user_id','user.id')
        .column('answer.id','user.nick_name','answer.text','answer.create_time',
        'answer.praise','answer.collect')
      let today = formatDate(new Date())
      let data = []
      answer.map(arr=>{
        arr.create_time = formatDate(arr.create_time)
        arr.create_time === today ? data.push(arr) : '';
        return data
      })
      res.json({
        code:200,
        data:data
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'服务器错误'
      })
    }
  },
  answerSingle: async function(req,res,next){
    let id = req.params.id;
    try{
      let answer = await answerModels.where({'answer.id':id})
        .leftJoin('user','answer.user_id','user.id')
        .column('answer.id','user.nick_name','answer.text','answer.create_time',
        'answer.praise','answer.collect')
        .leftJoin('topic','answer.topic_id','topic.id')
        .column('topic.title','topic.category_id')
        .leftJoin('category','topic.category_id','category.id')
        .column('category.name')
        answer.forEach(arr=>{
          arr.create_time = formatDate(arr.create_time)
        })
        res.json({
          code:200,
          data:answer[0]
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

module.exports = answerController;