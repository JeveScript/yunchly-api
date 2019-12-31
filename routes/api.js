var express = require('express');
var router = express.Router();

const middleAuth = require('../middleauth/middleAuth')
const authController =require('../controllers/auth')
const managerController = require('../controllers/manager')
const userController = require('../controllers/user')
const columnController = require('../controllers/column')
const categoryController = require('../controllers/category')
const topicController = require('../controllers/topic')
const answerController = require('../controllers/answer')
const wxTopicController = require('../controllers/wxTopic')
const wxAnswerController = require('../controllers/wxAnswer')
const qiniuController = require('../controllers/qiniu')
const recommendController = require('../controllers/recommend')
const bannerController = require('../controllers/banner')
const articleController = require('../controllers/article')

// 登录
router.post('/auth/login',authController.login)
router.post('/wxauth/login',authController.wxLogin)
// 管理员 接口
router.get('/manager',middleAuth,managerController.all);
router.get('/manager/:id',middleAuth,managerController.single);
router.post('/manager',middleAuth,managerController.insert);
router.put('/manager/:id',middleAuth,managerController.update);
router.delete('/manager/:id',middleAuth,managerController.delete);
// 用户 接口
router.get('/user',middleAuth,userController.all);
router.get('/userInfo',middleAuth,userController.user);
router.get('/user/:id',middleAuth,userController.single);
router.put('/user/:id',middleAuth,userController.update);
router.delete('/user/:id',middleAuth,userController.delete);
router.get('/userSingle/:id',middleAuth,userController.moreSingle);
// 分类 接口
router.post('/category',middleAuth,categoryController.insert);
router.put('/category/:id',middleAuth,categoryController.update);
router.delete('/category/:id',middleAuth,categoryController.delete);
router.get('/category',middleAuth,categoryController.all);
router.get('/category/:id',middleAuth,categoryController.single);
// 话题 接口
router.get('/topic',middleAuth,topicController.all);
router.get('/topic/:id',middleAuth,topicController.single);
router.post('/topic',middleAuth,topicController.insert);
router.put('/topic/:id',middleAuth,topicController.update);
router.delete('/topic/:id',middleAuth,topicController.delete);
router.put('/topicShow/:id',middleAuth,topicController.showAnswer)
// 回答 接口
router.get('/answer/:id',middleAuth,answerController.single)
router.delete('/answer/:id',middleAuth,answerController.delete)
router.get('/answerToday',middleAuth,answerController.today)
router.get('/answerSingle/:id',middleAuth,answerController.answerSingle)
// 合辑接口
router.post('/column',middleAuth,columnController.insert)
router.get('/column',middleAuth,columnController.all)
router.get('/column/:id',middleAuth,columnController.single)
router.put('/column/:id',middleAuth,columnController.update)
router.get('/columnSelected/:id',middleAuth,columnController.selected)
router.get('/columnUnSelected/:id',middleAuth,columnController.UnSelected)
router.post('/columnSelected',middleAuth,columnController.insertTopic)
router.put('/columnSelected',middleAuth,columnController.deleteTopic)
// 首页接口
router.get('/table/1/selected',middleAuth,recommendController.recommend)
router.get('/table/1/unSelected',middleAuth,recommendController.unRecommend)
router.get('/table/2/selected',middleAuth,recommendController.answer)
router.get('/table/2/unSelected',middleAuth,recommendController.unAnswer)
router.post('/table',middleAuth,recommendController.insert)
router.put('/table',middleAuth,recommendController.deleted)
// 轮播图banner接口
router.post('/banner',middleAuth,bannerController.insert)
router.get('/banner',middleAuth,bannerController.all)
router.get('/banner/:id',middleAuth,bannerController.single)
router.put('/banner/:id',middleAuth,bannerController.update)
router.delete('/banner/:id',middleAuth,bannerController.delete)
// 文章管理
router.post('/article',middleAuth,articleController.insert)
router.get('/article',middleAuth,articleController.all)
router.get('/article/:id',middleAuth,articleController.single)
router.put('/article/:id',middleAuth,articleController.update)
router.delete('/article/:id',middleAuth,articleController.delete)

// 七牛云 
router.get('/qiniu',qiniuController.upload)
// 微信小程序接口
router.get('/wxcategory',categoryController.all)    //  拿分类
router.get('/wxTopic',wxTopicController.all)        //  拿全部topic
router.get('/wxTopic/:id',wxTopicController.single) //  拿单个topic
router.put('/wxTopiPv',wxTopicController.pv)        //   pv 接口
router.post('/wxTopic',wxTopicController.follow)    //   关注接口
router.get('/wxTopicTitle/:id',wxTopicController.title)

router.put('/wxPraise',wxAnswerController.praise)   // 点赞
router.put('/wxUnPraise',wxAnswerController.unpraise)   // 取消点赞
router.get('/wxAnswer/:id',wxAnswerController.single)   // 回答单个
router.put('/wxCollect',wxAnswerController.collect)     //  收藏
router.put('/wxUnCollect',wxAnswerController.unCollect)   // 取消收藏
router.post('/wxReply',wxAnswerController.reply)      // 发布评论
router.post('/wxAnswer',wxAnswerController.insert)    // 增加回答

router.get('/wxColumn',columnController.all)          // 全部合辑
router.get('/wxColumn/:id',columnController.single)   // 单个合辑
router.get('/wxColumnSelected/:id',columnController.selected)  // 合辑的话题

router.get('/wxRecommend',recommendController.wxRecommend)   // 推荐的话题
router.get('/wxAnswer',recommendController.wxAnswer)       // 推荐的答题
router.get('/wxBanner',bannerController.all)           // 轮播
router.get('/wxBanner/:id',bannerController.single)

router.get('/wxUserFollow/:id',userController.follow)   // 用户关注的话题
router.get('/wxUserCollect/:id',userController.collect) // 用户收藏的回答
router.get('/wxUserSend/:id',userController.send)       // 用户发布的回答
router.put('/wxUser/:id',userController.update)         // 修改用户信息
router.get('/wxUser/:id',userController.single)

module.exports = router;
