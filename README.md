===========================

##  环境依赖
express 创建express文件

##  部署步骤

**1. npm install  //安装node运行环境

**2. npm install -save axios   //安装 axios

**3. npm install -save knex mysql  //安装 knex mysql 操作数据库


## 目录结构描述
├── Readme.md                   // help   
├── app                         // 应用  
├── config                      // 配置    
├── node_modules          
├── package.json    
├── db                          // 数据库SQL文件    
├── routes                      // 路由    
│   └── api.js                  // 提供前端数据接口    
│   └── index.js                // 内部渲染    
├── controllers                 // 控制器    
├── models                      // 模块   
│   └── knex.js                 // 初始化 数据库信息   
│   └── base.js                 // 公用方法   
├── utils                       // 工具   
│   └── formatDate.js           // 格式化时间