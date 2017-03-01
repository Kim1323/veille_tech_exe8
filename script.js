var http = require('http');
var fs = require('fs');
var url = require('url');
var obj;

// Création d'un serveur
http.createServer( function (request, response) {  
   // Extraction de la requête «request» le chemin  qui nous donnera le nom de fichier
   var pathname = url.parse(request.url).pathname;
   
  // Affichage du nom du fichier pour laquelle la requête a été généré
   console.log("Request for " + pathname + " received.");

   // Lire par le «fs» (file système) le fichier de la requête 
   // le slice(1) permet de retirer le premier caractère
   fs.readFile((pathname.slice(1) + ".json"), function (err, data) {
    //Si la page n'est pas trouvée, affichage de l'erreur 404
      if (err) {
         console.log(err);
         // HTTP Status: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
      //Si la page est trouvée, affichage d'un tableau
      }else { 
         //Page found   
         // HTTP Status: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
         response.write("<style>table,tr,th,td{border-collapse:collapse;border: black solid 1px;}</style>");
          afficherObjet(JSON.parse(data));
         // Affichage du contenu du fichier dans la page HTML
          response.write(obj);
      }
      // transmet la reponse  
      response.end();
   });   
}).listen(8081);

//Mise des données du fichier JSON dans un tableau
function afficherObjet(monObjet){
	obj = "<table>";
	for (propriete in monObjet){
		obj += "<tr>";
		obj += "<th>" + propriete + "</th><td>" + monObjet[propriete] + "</td>";
		obj += "</tr>";
	};
	obj += "</table>";
};