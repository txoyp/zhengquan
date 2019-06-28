const koa = require('koa');
const app = new Koa();

const cors = require('koa2-cors');
app.use(cors({
  origin:['http://xm626.free.idcfengye.com'],
  credentials:true
}));
