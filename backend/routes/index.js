var express = require('express');
var router = express.Router();
var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "admin",database:"hamza"
});

/* GET home page. */
router.get('/', function(req, res, next) {



    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      con.query('SELECT * FROM photo', function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.status(200).send(results)


    });
  })

});

module.exports = router;
