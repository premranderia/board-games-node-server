const fs = require('fs');
const jsonfile = require('jsonfile');
const filePath = 'data/saved-data.json';

class CodeName {

  deleteData() {
    return this.saveToJson({});
  }

  getGameById({ id }) {
    return new Promise((res, rej) => {
      this.readFromJson().then((data) => {
        if (data && data[id]) {
          res(data[id]);
        }
        rej();
      });
    });
  }

  storeData({ id, data }) {
    return new Promise((res, rej) => {
      this.readFromJson().then((obj) => {
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
      fs.writeFile(filePath, JSON.stringify(obj), (err, data) => {
        if (err) {
          rej(err);
        } else {
          res(data);
        }
      });
    });
  }

  readFromJson() {
    return new Promise((res, rej) => {
      jsonfile.readFile(filePath, function readFileCallback(err, data) {
        if (err) {
          rej(err);
        } else {
          res(data);
        }
      });
    });

  }
}

module.exports = new CodeName();