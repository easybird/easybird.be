---
title: "Transform your ES6 express.js node application to ES5"
subTitle: "Tutorial on how to create an express app with ES6, by using babel-register"
date: "2016-04-19T22:12:03.284Z"
---

#### 

[Transform your ES6 express.js node application to ES5](http://www.easybird.be/en/blog/transform-es6-to-es5-with-babel)

##### 

Tutorial on how to create an express app with ES6, by using babel-register

Apr 19, 2016

##### 

Setup an express app

Start by creating a simple node application with express

* open the command line and go to the folder where you want to initialise your express app
* install express globally to make sure you can easily run the express init command:

$ npm i express -g

* run the express init command:

$ express //without options if you want an express app with the default jade templating engine)

* This command created a default express app with a public folder, some routes and some jade views. Also the very important files 'package.json' and 'app.js' have been created.
* now run the 'npm install' command to download all dependencies specified in the package.json file into the 'node\_modules' folder

$ npm install

* Start the app by running the command: 'npm start', and check if it's running by surfing to localhost:3000 (default port specified in the file bin/www)

$ npm start

Et voila, simple as that to create your express app! Now check out the app.js file. You'll see that require.js is still used and that the code in there is ES5\. Now we will transform our app to ES6 and transform it back to ES5 so express can understand our 'code of the future'.

##### 

Add some ES6 code to our application

* Open the app.js file
* Change the first line to an ES6 or ES2015 import statement:

From:

        var express = require 'express';

to:

        import express from 'express';

* Now run 'npm start', and see that express throws a SyntaxError because it has found 'An unexpected reserved word': import.

##### 

Transform ES2015 (ES6) code to ES5 before starting the express app

We will use [babel-register](https://babeljs.io/docs/usage/require/) to make the ES6 code readable for express. Run the command

$ npm i babel-register -S

This will download babel-register and add this to your dependencies in the package.json file.

Now we need to tell babel-register to transform the code. Open the file 'bin/www'. This file uses the app.js file and creates and starts up an express HTTP server. Our goal is to transform the codebase to ES5 before the express server starts using the codebase. Change the first part of the code:

        var app = require('../app'); var debug = require('debug')('BASE-FOLDER-NAME:server'); var http = require('http');

to this:

        compileBackEnd(startExpress);

        function compileBackEnd(callback) { require('babel-register')({ ignore: [/node\_modules/, /public/javascripts / ], presets: ['es2015'] }); callback(); }; 

        function startExpress() { var app = require('../app'); var debug = require('debug')('BASE-FOLDER-NAME:server'); var http = require('http'); \* ALL OTHER CODE FROM THIS FILE SHOULD COME HERE \* }

This will allow babel-register to do its work before starting up express. As babel is a generic code transformer platform, you must add a preset to babel, to make sure it transforms the ES6 (or ES2015 code). This could be specified by adding the presets property to the babel-register call:

        require('babel-register')({ ignore: [/node\_modules/, /public/javascripts / ], presets: ['es2015'] });

Or by adding a .babelrc file to the root directory of the project which specifies the presets.

* Now run the command 'npm i babel-preset-es2015 -S' to install the preset babel needs to use.

$ npm i babel-preset-es2015 -S

* And finally run 'npm start' again, this will start up the application again! Now you are completely ready to start using ES6 or ES2015 code in your express app!

$ npm start

Having a problem? Compare your code to my example code [on Github](https://github.com/easybird/playground-transform-es6-to-es5-with-babel). Good luck!