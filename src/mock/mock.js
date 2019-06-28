import Mock from 'mockjs'

let Random = Mock.Random;
let stockList = req => {
  let stockList = [];
  for(let i = 0;i < 8; i++){
    let stock = {
      id:Random.integer(1,10),
      name:Random.ctitle(1,5),
      price:Random.float(1,5,0,9),
      range:Random.float(1,5,0,9)
    };
    stockList.push(stock);
  }
  return stockList
};

let sList = req => {
  let sList = [];
  for(let i = 0;i < 5; i++){
    let stock = {
      id:Random.integer(1,10),
      name:Random.ctitle(1,5),
      price:Random.float(1,5,0,9),
      range:Random.float(1,5,0,9)
    };
    sList.push(stock);
  }
  return sList
};

Mock.mock('http://www.zxy.com/getStockItem',stockList);
Mock.mock('http://www.zxy.com/stockList',sList);

