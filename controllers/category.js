const categoryModels = require('../models/category')

const categoryController ={
  insert: async function(req,res,next){
    let name = req.body.name
    if(!name){
      res.json({
        code:0,
        message:'缺少参数'
      })
      return
    }
    try{
      await categoryModels.insert({name})
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
    let name = req.body.name
    if(!name){
      res.json({
        code:0,
        message:'缺少参数'
      })
      return
    }
    try{
      await categoryModels.update(id,{name})
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
    let id = req.params.id
    try{
      await categoryModels.delete(id)
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
  all: async function(req,res,next){
    try{
      const all = await categoryModels.all()
      res.json({
        code:200,
        data:all,
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
  single: async function(req,res,next){
    let id = req.params.id;
    try{
      let singles = await categoryModels.single(id)
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
  }
}

module.exports = categoryController;