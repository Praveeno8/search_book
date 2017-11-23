# search_book with the help of google book api
#This is a basic application for searching the books and getting the results based on the search query.
#Technology Used-Angular JS, Node JS, Bootstrap, Google Book Api.
#Description-
In this application their are two folders named client and server.In the client folder i had written the code for front end that is main module and its controller where as in server folder we have written the code for server side that is start a server on the port "localhost:3000" and two get request for getting the book records from the api.
#client-
In the client folder their is one file named index.html which will run in the browser when we start the application. In that file i created a module named "app" and controller name is "MyCtrl" whicl will handle all the request of that module. In this module we are using "http" request for restful services and we are getting the response in the response variable.their is one another file that is app.css which is used for css purpose.thats is all about the client module.
#server-
In this folder we have written the code for server side programming.for server side their is mainly one file that is app.js
mainly three things are their that is first one is starting the server, second one is getting the default books ,and third one is getting books records based on the search query.
#package.json-this is mainly used for node module.All the node module are defiend here only.

#Installation-
For installation and to run the application git and NPM must be installed into your system.
steps to run-1.through commnad prompt go to any folder and clone my project using the command git clone "https://github.com/Praveeno8/search_book.git"
2.After clone go to the server folder through command prompt.
3.run the command -node app.js
this command will start a node server that is "localhost:3000" now go to the browser and run this your will get my project.
