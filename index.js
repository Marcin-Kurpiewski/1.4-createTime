process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function(){
	//treść do odczytania w chwili wejscia 
	process.stdout.write(" 1. exit \n 2. node version \n 3. sayHello \n 4. getOSinfo \n");
	var input= process.stdin.read();
	if(input !== null){
		var instruction=input.toString().trim();
			// if(instruction == "exit"){
			// 	process.stdout.write("closing application \n");
			// 	process.exit();
			// } else {
			// 	process.stderr.write("wrong instruction! \n");
			// }
			switch (instruction){

				case "exit":
				process.stdout.write("closing application \n");
				process.exit();
				break;

				case "node version":
				var version= require('../modules/nodeVersion');
				break;

				case "sayHello":
				process.stdout.write("Hello buddy ! \n");
				break;

				case "getOSinfo":
				var OSinfo = require('./modules/osInfo');
				break;

				
			}


		// process.stdout.write(input);
	}
	
});