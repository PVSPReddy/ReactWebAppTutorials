var express = require('express');

var app = express();

app.use(express.static('Public'));

app.listen(3000, function(){
    console.log("app is running on the server : 3000");
});