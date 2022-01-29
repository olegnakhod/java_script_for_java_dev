let express = require("express");
let bodyParser = require("body-parser");

let server = express();

server.use(express.static(__dirname));
server.use(bodyParser.urlencoded({ 
    extended: true
}));
server.use(bodyParser.json());

let cors = require('cors')
server.use(cors())

server.get("/", function (request, response) {
    console.log('Server started!');
});

server.get("/userGet", function (request, response) {
    console.log(request.query);
    let obj = request.query;
    console.log(obj.userName += '.validatedByGet');
    console.log(obj.userAge += '.validatedByGet');
    console.log(obj.userSurname += '.validatedByGet');
    console.log(obj.userAddress += '.validatedByGet');
    response.send('Data :' + JSON.stringify(obj));
    console.log('Data is loaded GET method');
});

server.post("/userPost", function (request, response) {
    console.log(request.body);
    let obj = request.body;
    console.log(obj.userName += '.validatedByGet');
    console.log(obj.userAge += '.validatedByGet');
    console.log(obj.userSurname += '.validatedByGet');
    console.log(obj.userAddress += '.validatedByGet');
    response.send('Data :' + JSON.stringify(obj));
    console.log('Data is loaded POST method');
});

server.listen(3000);
