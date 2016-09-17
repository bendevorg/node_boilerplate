var mongoose = require('mongoose');
var fs = require('fs');

//  Database URL
var MONGO_URL = 'mongodb://guirox013:grx123@ds161495.mlab.com:61495/heroku_45vbx524'
//var MONGO_URL = 'mongodb://localhost/BoldWork';

//  Connect to the database
mongoose.connect(MONGO_URL, {server:{auto_reconnect:true}});
var db = mongoose.connection;

//  Connection fails log the error
db.on('error', function(err){
    console.error('MongoDB connection error: ', err);
});

//  Connection ok log the success
db.once('open', function callback(){
    console.info('MongoDB connection is established.');    
});

//  Connect lost log the event and try to reconnect
db.on('disconnected', function() {
    console.error('MongoDB disconnected.');
    mongoose.connect(MONGO_URL, {server:{auto_reconnect:true}});        
});

// Connect restablished log the event
db.on('reconnected', function() {
    console.info('MongoDB reconnected.');
});

//  Load our DB models
var models_path = process.cwd() + '/app/models';

fs.readdirSync(models_path).forEach(function (file){
    if (~file.indexOf('.js')){
        require(models_path + '/' + file);
    }
});
