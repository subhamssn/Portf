const express = require('express');
const port = 9000;

const app = express();

// Serve static files from the "public" directory
app.use(express.static(__dirname + '/'));

// Route for the home page
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, function(err){ 
    if(err){ 
        console.log('Error in running the server: ', err); 
        return; 
    } 
    console.log("Server is running on port: ", port); 
});