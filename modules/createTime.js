
function createTime(){


process.stdin.on('readable', function(){
	process.stdout.write("Enter the numbers of seconds :\n");
	var inputS= process.stdin.read();
		seconds=Math.floor(inputS % 3600 % 60),
		minutes=Math.floor(inputS % 3600 /60),
		hours = Math.floor(inputS / 3600);

	if( inputS < 0){
		// var data = inputS.trim();
		console.log("wrong data");
	} else {
		console.log(inputS + "sec to " + hours +" hou. " + minutes + " min. " + seconds + " sec.");
	}
})
}

exports.timeC= createTime();