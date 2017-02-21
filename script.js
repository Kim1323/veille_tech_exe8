var oProvince = {
	"QC" : "Québec",
	"ON" : "Ontario",
	"AL" : "Alberta"
};

oProvince["NB"] = "Nouveau-Brunswick";
oProvince.MA = "Manitoba";

function affiche_objet(monObjet){
	for (propriete in monObjet){
		console.log(propriete + " - " + monObjet[propriete]);
	};
};
affiche_objet(oProvince);






var http = require("http"); //importe le module serveur http

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>Hello World</h1>");
  response.write("<p>fvdhdghgjgs jsfhv hfsh shfsh dfnj hfsuhujdfjhdfkg</p>");
  response.end();
}).listen(8888);






var fs = require("fs");

fs.readFile('04_fichier.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended");








var fs = require('fs');
var obj;
fs.readFile('file', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
});