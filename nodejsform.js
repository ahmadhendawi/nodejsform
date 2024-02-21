const express= require('express')

var app= express();

var bodyParser= require('body-parser')

var urlEncoded= bodyParser.urlencoded({extended:false})

app.get('/form', function(req,res){

res.sendFile(__dirname+'/myform.html')
})

app.post('/submitform', urlEncoded, function(req,res){

    res.send("data has been submitted succesfully" + req.body.email+req.body.password+req.body.gender)})
    
    var server= app.listen(9000, function(){
        var host = server.address().address
        var port = server.address().port
    })