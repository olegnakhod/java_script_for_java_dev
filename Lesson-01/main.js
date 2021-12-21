'use strict'

let name = "John";
let admin;

admin = name;

console.log(admin);

let login = "Admin";
let password = "123456";

console.log("Who's there?");
if(login == "Admin"){
    console.log("Password?");
    if(password == "TheMaster"){
        console.log("Welcome");
    }else if(password == "Cancel"){
        console.log("Canceled");
    }else{
        console.log("Wrong password");
    }
}else if(password == "Cancel"){
    console.log("Canceled");
}else{
    console.log("I don't know it");
}

console.log("\n");

console.log("Who's there?");
switch(login){
    case "Admin":{
        console.log("Password?");
        switch(password){
            case "TheMaster":{
                console.log("Welcome"); 
                break;
            }
            case "Cancel":{
                console.log("Canceled");
                break;
            }
            default:{
                console.log("Wrong password");
            }
                
        }
        break;
    }
    case "Cancel":{
        console.log("Canceled");
        break;
    }
    default:{
        console.log("I don't know it");
    }
}