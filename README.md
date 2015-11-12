MyQNode
=======

This is a NodeJS module that allows you to control your Chamberlain MyQ enabled
Garage Door Opener.

Follow Chamberlain's userguide to install the MyQ Gateway on your network, as well as
to create an account with the myQ portal.


Pre-requisites
--------------

	es6-promise



## Installation
```shell
	npm install myqnode --save
```

## Usage

```js
	var myQLib = require('myqnode');
	var myQ = myQLib.myQ('<userid>','<password>');
	var Promise = require('es6-promise').Promise

	myQ.getDevices()
	   .then(function(respObj){
	        console.log(respObj);
	   },
	   function(respObj){
	        console.log("Error executing method "+respObj);
           }
        );


	myQ.openDoor('<deviceId>')
	   .then(function(state){
          	console.log("Sucessfully Opened Door,"+state);
	   },
           function(state){
           	console.log("Error Opening Door",+state);
	   }
        );
```
