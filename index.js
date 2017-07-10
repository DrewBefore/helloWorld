var express = require('express');
var app = express();
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var bodyParser = require("body-parser");
var Project = require("./models/project.js");

//mongoose.connect("mongodb://localhost/portfolio");
mongoose.connect(process.env.PORTFOLIOURL);

// SAVE NEW PROJECT
// var testProject = new Project({name: "test6", img:"test.img"});
// testProject.save(function(err, project){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("successfully saved project to database");
//   }
// });

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//test
app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/projects', function(req, res){
    Project.find({}, function(err, allProjects){
      if(err){
        console.log(err);
      } else {
        console.log(allProjects);
      }
  });
  res.render('pages/projects');
});

//test
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


