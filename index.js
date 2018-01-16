var express = require('express');
var app = express();


var dockerCLI = require('docker-cli-js');
var DockerOptions = dockerCLI.Options;
var Docker = dockerCLI.Docker;

var docker = new Docker();


app.get('/images', function (req, res) {
  docker.command('images', function (err, data) {
    console.log('data = ', data);
    res.json(data);
  });
});

app.get('/list-all-containers', function (req, res) {
  docker.command('ps -a', function (err, data) {
    console.log('data = ', data);
    res.json(data);
  });
});

app.get('/list-running-containers', function (req, res) {
  docker.command('ps', function (err, data) {
    console.log('data = ', data);
    res.json(data);
  });
});


var server = app.listen(7000, function () {
  var port = server.address().port

  console.log("Example app listening at port %s",port)
})
