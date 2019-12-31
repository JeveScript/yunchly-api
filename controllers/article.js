const articleModels = require('../models/article')

const articleController ={
  insert: async function(req,res,next){
    let title = req.body.title
    let content = req.body.content;

    if(!title || !content){
      res.json({
        code:0,
        message:'缺少参数'
      })
      return
    }
    try{
      await articleModels.insert({title,content})
      res.json({
        code:200,
        message:'添加成功'
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'添加失败'
      })
    }
  },
  update: async function(req,res,next){
    let id = req.params.id
    let title = req.body.title
    let content = req.body.content;
    let params = {}
    if(title) params.title = title
    if(content)params.content = content
    try{
      await articleModels.update(id,params)
      res.json({
        code:200,
        message:'修改成功'
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'服务器出错'
      })
    }
  },
  single: async function(req,res,next){
    let id =req.params.id
    try{
      let article = await articleModels.single(id)
      res.json({
        code:200,
        data:article[0]
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'服务器出错'
      })
    }
  },
  all: async function(req,res,next){
    try{
      let data = await articleModels.all()
      res.json({
        code:200,
        data
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'服务器出错'
      })
    }
  },
  delete: async function(req,res,next){
    let id = req.params.id
    try{
      await articleModels.delete(id)
      res.json({
        code:200,
        message:'删除成功'
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

module.exports = articleController;