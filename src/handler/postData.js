const dbConnection = require("../../database/db_connection.js");
const postData = (name, cb) => {
  dbConnection.query(
    "INSERT INTO people (name) VALUES ($1)",
    [name],
    (err, res) => {
      if (err) {
        return cb(err);
      } else {
        cb(null, res);
      }
    }
  );
};
module.exports = postData;
