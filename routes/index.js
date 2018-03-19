var express = require('express');
var router = express.Router();
const codeName = require('public/javascripts/CodeName.controller.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile(__dirname + '/index.html');
});

router.post('/api/code-name', (req, res, next) => {
  const body = req.body;
  const id = Number(body.id);
  codeName.storeData({ data: body.data, id }).then((data) => {
    res.send({
      sucess: true,
      data
    });
  });
});

router.get('/api/code-name/:id', (req, res, next) => {
  const id = Number(req.params.id);
  codeName.getGameById({ id }).then((data) => {
    res.send(data);
  }, () => {
    res.send({});
  });
});

router.delete('/api/code-name', (req, res, next) => {
  console.log('deleitng');
  codeName.deleteData().then(() => {
    res.send({
      sucess: true,
      message: 'All Data deleted'
    })
  }, () => {
    res.send({
      sucess: false,
      message: 'Error deleting data'
    });
  });
});
module.exports = router;

