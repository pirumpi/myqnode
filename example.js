var myQLib = require("./myQ.js");
var myQ = myQLib.myQ('<userid>','<password>');
var Promise = require('es6-promise').Promise;


myQ.getDevices()
	.then(function(respObj){
					console.log(respObj);
				},
				function(respObj){
					console.log("Unsucessful"+respObj);
				}
	);


myQ.getDoorStatus('<deviceId>')
	.then(function(state){
		 console.log("Current State:"+state);
	});


/*
myQ.openDoor('<deviceId>')
	.then(function(state){
					console.log("Sucessfully completed!"+state)
			  },
				 function(state){
					console.log("unscessful"+state)
   			}
	 );

*/
/*
myQ.closeDoor('<deviceId>')
	.then(function(state){
					console.log("Sucessfully completed!"+state)
			  },
				 function(state){
					console.log("unscessful"+state)
   			}
	 );
*/
