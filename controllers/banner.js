const bannerModels = require('../models/banner')

const bannerController = {
  insert: async function(req,res,next){
    let image_url = req.body.image_url
    let pages = req.body.pages
    if(!image_url || !pages ){
      res.json({
        code:0,
        message:'缺少参数'
      })
      return
    }
    try{
      await bannerModels.insert({image_url,pages})
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
  all:async function(req,res,next){
    try{
      let data = await bannerModels.all()
      res.json({
        code:200,
        data
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'服务器错误'
      })
    }
  },
  single:async function(req,res,next){
    let id = req.params.id
    try{
      let data = await bannerModels.where({'banner.id':id})
        .leftJoin('article','banner.pages','article.id')
        .column('article.content','article.title','banner.pages')
      res.json({
        code:200,
        data:data[0]
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:"服务器错误"
      })
    }
  },
  update: async function(req,res,next){
    let id = req.params.id
    let params = {}
    let image_url = req.body.image_url
    let content = req.body.content
    let pages = req.body.pages
    if(image_url)params.image_url = image_url
    if(content)params.content = content
    if(pages)params.pages = pages
    try{
      await bannerModels.update(id,params)
      res.json({
        code:200,
        message:'修改成功'
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'修改失败'
      })
    }
  },
  delete:async function(req,res,next){
    let id =  req.params.id
    try{
      await bannerModels.delete(id)
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
  }
}

module.exports = bannerController;