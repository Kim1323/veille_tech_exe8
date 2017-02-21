var http = require("http"); //importe le module serveur http
var fs = require('fs');
var obj;
var objChaine;

function afficherObjet(monObjet){
	objChaine = "<table>";
	for (propriete in monObjet){
		objChaine += "<tr>";
		objChaine += "<th>" + propriete + "</th><td>" + monObjet[propriete] + "</td>";
		objChaine += "</tr>";
	};
	objChaine += "</table>";
};

fs.readFile('07_fichier.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
  afficherObjet(obj);
});

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(objChaine);
  response.end();
}).listen(3000);