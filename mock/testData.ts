import {Request, Response} from 'express'
import mockjs from 'mockjs';

export default {
  'GET /api/test'(req: Request, res: Response) {
    res.send({
      code: 0,
      message: 'ok',
      name:"xiaozhang"
    });
  },
   // 支持值为 Object 和 Array
   'GET /api/users': { users: [1, 2] },
   // GET 可忽略
   '/api/users/1': { id: 1 },
   // 支持自定义函数，API 参考 express@4
   'POST /api/users/create': (req:Request, res:Response) => {
     // 添加跨域请求头
     res.setHeader('Access-Control-Allow-Origin', '*');
     res.end('ok');
   },
   // 使用 mockjs 等三方库
  'GET /api/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
  }),
};
