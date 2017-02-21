var http = require("http"); //importe le module serveur http
var fs = require('fs');
var obj;

function afficherObjet(monObjet){
	obj = "<table>";
	for (propriete in monObjet){
		obj += "<tr>";
		obj += "<th>" + propriete + "</th><td>" + monObjet[propriete] + "</td>";
		obj += "</tr>";
	};
	obj += "</table>";
};

fs.readFile('07_fichier.json', 'utf8', function (err, data) {
  if (err) throw err;
  afficherObjet(JSON.parse(data));
});

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<style>table,tr,th,td{border: black solid 1px}</style>");
  response.write(obj);
  response.end();
}).listen(3000);