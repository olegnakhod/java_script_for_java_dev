let express = require("express");
let bodyParser = require("body-parser");

let server = express();
let jsonParser = bodyParser.json();

server.use(express.static(__dirname));
server.use(jsonParser);

server.get("/", function (req, resp) {
    console.log("Start page requested.");
});

server.get("/formGet", function (req, resp) {
    console.log("Form receipted by GET.");
    let obj = req.query;
    console.log(obj.userName += ".ValidatedByGET");
    console.log(obj.userSurname += ".ValidatedByGET");
    console.log(obj.userAge += ".ValidatedByGET");
    console.log(obj.userAddress += ".ValidatedByGET");
	resp.send(JSON.stringify(obj));
});

server.post("/formPost", function (req, resp) {
    console.log("Form receipted by POST.");
    let obj = req.body;
    console.log(obj.userName += ".ValidatedByPOST");
    console.log(obj.userSurname += ".ValidatedByPOST");
    console.log(obj.userAge += ".ValidatedByPOST");
    console.log(obj.userAddress += ".ValidatedByPOST");
    resp.send(JSON.stringify(obj));
});

server.listen(3000); //the server object listens on port 8080