var os = require('os');
var colors = require('colors');
var createTime = require('./createTime')

function getOSinfo(){
	var type = os.type();
	var release = os.release();
		if(type === 'Darwin') {
   			type = 'OSX';
		} else if(type === 'Windows_NT') {
    		type = 'Windows';
		}
		console.log(colors.green('System:'), type);
		console.log(colors.red('Release:'), release);
	var cpu = os.cpus()[0].model;
		console.log(colors.blue('CPU model:'), cpu);
	
	
		// console.log(colors.cyan('Uptime: ~'), ((uptime / 60)*60).toFixed(0), 'sec');
		console.log(colors.cyan('Uptime: ~'), createTime.timeC(os.uptime()));
	var userInfo = os.userInfo();
		console.log(colors.magenta('User name:'), userInfo.username);
		console.log(colors.random('Home dir:'), userInfo.homedir);
}

exports.OSinfo = getOSinfo();
