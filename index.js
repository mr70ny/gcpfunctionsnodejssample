const {formattedDate} = require("./dateFormatter");


exports.helloHTTP = function helloHTTP(req,resp){
    resp.status(200).send(formattedDate());
}

exports.psHelloPubSub = function psHelloPubSub(event,callback){
    console.log(`Hello PubSub ${formattedDate}`);
    callback();
}

exports.psHelloStorage = function psHelloStorage(event,callback){
    console.log(`Hello PubSub ${formattedDate}`);
    callback();
}