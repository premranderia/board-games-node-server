var express = require('express');
var router = express.Router();
const codeName = require('public/javascripts/CodeName.controller.js');

/* GET home page. */
router.get('/', function (req, res, next) {
 
});


router.post('/api/code-name', (req, res, next) => {
  const body = req.body;
  const id = Number(body.id);
  if (req.session.data && req.session.data[id]) {
    req.session.data[id] = 0;
  }
  codeName.storeData({ data: body.data, id }).then((data) => {
    console.log('Response time baby !!');
    res.send({
      sucess: true,
      data
    });
  });
});

router.get('/api/code-name/:id', (req, res, next) => {
  const id = Number(req.params.id);
  console.log('req.session.spyViewCount', req.sessionID, req.session.data);
  codeName.getGameById({ id }).then((data) => {
    // Update spy view count to be greater than
    if (data['spyViewCount'] !== undefined) {
      data['spyViewCount'] = data['spyViewCount'] + 1;
      console.log(`data['spyViewCount']`);
      if (data['spyViewCount'] === 1) {
        req.session.data = {
          [id]: data['spyViewCount']
        };
      }
      codeName.storeData({ data, id });
    }

    if (req.session.data && req.session.data[id] === 1) {
      data['spyViewCount'] = 1;
    }
    res.send(data);
  }, () => {
    res.send({});
  });
});

module.exports = router;
