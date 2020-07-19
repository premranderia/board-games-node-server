const fs = require('fs');
const jsonfile = require('jsonfile');
const linkeGameData = 'data/linkee-data.json';
const linkeGameQuestions = 'data/linkee-questions.json';

class Linkee {
  deleteData() {
    return this.saveToJson({});
  }

  getGameById({ id }) {
    return new Promise((res, rej) => {
      this.readLinkeeGame().then((data) => {
        if (data && data[id]) {
          res(data[id]);
        }
        rej();
      });
    });
  }

  getQuestions() {
    return new Promise((res, rej) => {
      this.readLinkeeQuestions().then((data) => {
        if (data) {
          res(data);
        }
        rej();
      });
    });
  }

  getAllGames() {
    return new Promise((res, rej) => {
      this.readLinkeeGame().then((data) => {
        if (data) {
          res(data);
        }
        rej();
      });
    });
  }

  storeData({ id, data }) {
    return new Promise((res, rej) => {
      this.readLinkeeGame().then((obj) => {
        if (obj) {
          obj[id] = data;
          this.saveToJson(obj).then((err) => {
            if (err) {
              rej();
            }
            res(data);
          });
        }
      });
    });
  }

  saveToJson(obj) {
    return new Promise((res, rej) => {
      fs.writeFile(linkeGameData, JSON.stringify(obj), (err, data) => {
        if (err) {
          rej(err);
        } else {
          res(data);
        }
      });
    });
  }

  readLinkeeGame() {
    return new Promise((res, rej) => {
      jsonfile.readFile(linkeGameData, function readFileCallback(err, data) {
        if (err) {
          rej(err);
        } else {
          res(data);
        }
      });
    });
  }

  readLinkeeQuestions() {
    return new Promise((res, rej) => {
      jsonfile.readFile(linkeGameQuestions, function readFileCallback(err, data) {
        if (err) {
          rej(err);
        } else {
          res(data);
        }
      });
    });
  }
}

module.exports = new Linkee();
