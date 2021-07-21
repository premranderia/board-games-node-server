var express = require('express');
var router = express.Router();
const codeName = require('public/javascripts/CodeName.controller');
const LinkeeGame = require('public/javascripts/Linkee.controller');
var path = require('path');

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
      data,
    });
  });
});

router.post('/api/linkee-game', (req, res, next) => {
  const body = req.body;
  const id = Number(body.id);
  LinkeeGame.storeData({ data: body.data, id }).then((data) => {
    res.send({
      sucess: true,
      data,
    });
  });
});

router.get('/api/linkee-game/:id', (req, res, next) => {
  const id = Number(req.params.id);
  LinkeeGame.getGameById({ id }).then(
    (data) => {
      res.send(data);
    },
    () => {
      res.send({});
    }
  );
});

router.get('/api/linkeegame/questions', (req, res, next) => {
  LinkeeGame.getQuestions().then(
    (data) => {
      res.send(data);
    },
    () => {
      res.send({ test: 'pooped' });
    }
  );
});

router.get('/api/code-name/:id', (req, res, next) => {
  const id = Number(req.params.id);
  codeName.getGameById({ id }).then(
    (data) => {
      res.send(data);
    },
    () => {
      res.send({});
    }
  );
});

router.get('/api/code-name', (req, res, next) => {
  codeName.getAllGames().then(
    (data) => {
      res.send(data);
    },
    () => {
      res.send({});
    }
  );
});

router.delete('/api/code-name', (req, res, next) => {
  codeName.deleteData().then(
    () => {
      res.send({
        sucess: true,
        message: 'All Data deleted',
      });
    },
    () => {
      res.send({
        sucess: false,
        message: 'Error deleting data',
      });
    }
  );
});

router.get('/api/San_Francisco', (req, res, next) => {
  res.send({
    coord: { lon: -62.08, lat: -31.43 },
    sys: { message: 0.3897, country: 'AR', sunrise: 1428575101, sunset: 1428616476 },
    weather: [{ id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03d' }],
    base: 'stations',
    main: {
      temp: 303.364,
      temp_min: 303.364,
      temp_max: 303.364,
      pressure: 1015.65,
      sea_level: 1026.91,
      grnd_level: 1015.65,
      humidity: 42,
    },
    wind: { speed: 2.85, deg: 32.0037 },
    clouds: { all: 44 },
    dt: 1428614645,
    id: 3837675,
    name: 'San Francisco',
    cod: 200,
  });
});

router.get('/api/Miami', (req, res, next) => {
  res.send({
    coord: { lon: -80.19, lat: 25.77 },
    sys: { message: 0.0283, country: 'US', sunrise: 1428577391, sunset: 1428622877 },
    weather: [{ id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' }],
    base: 'stations',
    main: {
      temp: 302.314,
      temp_min: 302.314,
      temp_max: 302.314,
      pressure: 1031.62,
      sea_level: 1031.81,
      grnd_level: 1031.62,
      humidity: 55,
    },
    wind: { speed: 6.7, deg: 102.004 },
    clouds: { all: 20 },
    dt: 1428614998,
    id: 4164138,
    name: 'Miami',
    cod: 200,
  });
});

router.get('/api/New_York_City', (req, res, next) => {
  res.send({
    coord: { lon: -74.01, lat: 40.71 },
    sys: { message: 0.4108, country: 'United States of America', sunrise: 1428575146, sunset: 1428622154 },
    weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d' }],
    base: 'stations',
    main: {
      temp: 280.914,
      temp_min: 280.914,
      temp_max: 280.914,
      pressure: 1035.02,
      sea_level: 1038.91,
      grnd_level: 1035.02,
      humidity: 75,
    },
    wind: { speed: 2.92, deg: 83.0037 },
    clouds: { all: 92 },
    dt: 1428615012,
    id: 5128581,
    name: 'New York',
    cod: 200,
  });
});

router.get('/api/Chicago', (req, res, next) => {
  res.send({
    coord: { lon: -87.65, lat: 41.85 },
    sys: { message: 0.014, country: 'US', sunrise: 1428578344, sunset: 1428625502 },
    weather: [{ id: 501, main: 'Rain', description: 'moderate rain', icon: '10d' }],
    base: 'stations',
    main: {
      temp: 286.264,
      temp_min: 286.264,
      temp_max: 286.264,
      pressure: 991.9,
      sea_level: 1013.82,
      grnd_level: 991.9,
      humidity: 76,
    },
    wind: { speed: 8.25, deg: 202.004 },
    clouds: { all: 92 },
    rain: { '3h': 4.61 },
    dt: 1428615189,
    id: 4887398,
    name: 'Chicago',
    cod: 200,
  });
});

router.get('/api/New_Orleans', (req, res, next) => {
  res.send({
    coord: { lon: -90.08, lat: 29.95 },
    sys: { message: 0.0108, country: 'US', sunrise: 1428579574, sunset: 1428625436 },
    weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' }],
    base: 'stations',
    main: {
      temp: 299.514,
      temp_min: 299.514,
      temp_max: 299.514,
      pressure: 1029.59,
      sea_level: 1029.75,
      grnd_level: 1029.59,
      humidity: 71,
    },
    wind: { speed: 6.62, deg: 166.504 },
    clouds: { all: 68 },
    dt: 1428615211,
    id: 4335045,
    name: 'New Orleans',
    cod: 200,
  });
});

router.get('/api/mock-image', (req, res, next) => {
  console.log(__dirname);
  const filePath = path.join(__dirname, '../public/images/weather.png');
  console.log(filePath);
  res.sendFile(filePath);
});
module.exports = router;
