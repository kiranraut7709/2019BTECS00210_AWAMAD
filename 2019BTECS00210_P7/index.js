const express = require('express')
const app = express();

app.get('/multipleCallback', function (req, res, next) {
    console.log('First Function Called')
    next()
    
  }, function (req, res) {
    console.log('Second Function Called')
    res.send('<h3>Both the Functions are executed</h3>')
  })

  
app.get('/differentRoute', function (req, res) {
    console.log('This is Different Route')
    res.send('<h3>This is differentRoute</h3>')
  })

var func1 = function (req, res, next) {
    console.log('Callback Function 1')
    next()
  }
  
  var func2 = function (req, res, next) {
    console.log('Callback Function 2')
    next()
  }
  
  var func3 = function (req, res) {
    console.log('Callback Function 3')
    res.send('<h3>Last Function Executed</h3>')
  }
  
  app.get('/callbackArray', [func1, func2, func3])


app.listen(5000,() => console.log("Listening on port 5000"))