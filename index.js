
var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/';

function findDocuments(db,callback){
	var collection = db.collection('numbers');

	collection.find().toArray(function(err, docs) {
		console.log(docs);
		callback;
	});
}

MongoClient.connect(url, function(err, db){
	console.log("Connected");
	var dbo = db.db("learning_mongo");

	findDocuments(dbo, function(){
		dbo.close();
	});
});











// function findDocuments(db, callback){

// 	collection = db.collection('numbers');

// 	collection.find().toArray(function(err, docs) {
// 		console.log(docs);
// 		callback;
// 	});
// }

// MongoClient.connect(url, function(err, db){
// 	var dbo = db.db("learning_mongo");

// 	console.log("Connected successfully to server");
// 	console.log(dbo);
// 	findDocuments(dbo, function() {
// 		dbo.close();
// 	});
// });
