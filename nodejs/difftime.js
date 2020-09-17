#!/usr/bin/env node

var util = require('util');
var spawn = require('child_process').spawn;
var ls = spawn('du', ['-sh', '/home/hanjunjie/Test']);
var start = +new Date();
ls.stdout.on('data', function (data) {
	console.log('stdout: ' + data);
});
ls.stderr.on('data', function (data) {
	console.log('stderr: ' + data);
});
ls.on('exit', function (code) {
	var end = +new Date();
	console.log("time(ms): " + (end - start));
});
