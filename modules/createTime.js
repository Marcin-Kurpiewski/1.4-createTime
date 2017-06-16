var os = require('os');



function createTime(inputS) {
	var seconds=Math.floor(inputS % 3600 % 60),
		minutes=Math.floor(inputS % 3600 /60),
		hours = Math.floor(inputS / 3600);

	if (inputS < 0) {
		console.log("wrong data");
	} else {
		console.log(inputS + " sec to " + hours +" hou. " + minutes + " min. " + seconds + " sec.");
	}
}


exports.timeC= createTime;