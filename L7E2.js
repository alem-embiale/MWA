const express = require('express');
const crypto = require('crypto');
const MongoClient = require('mongodb').MongoClient;

const app = express();

const mongoPromise = new Promise((resolve, reject) => {
	MongoClient.connect('mongodb://localhost:27017/homework7',{ useNewUrlParser: true }, (err, client) => {
		if(err){
			reject("Couldn't connect to MongoDB");
		}else{
			resolve(client.db('homework7'));
		}
	});
});

app.get('/secret', (req, res) => {
	const data = mongoPromise
		.then(async db => {
			const data = await db.collection('theSecret').findOne()
			console.log(data);

			const myKey = crypto.createDecipher('aes256', 'asaadsaad');
			let result = myKey.update(data.message, 'hex', 'utf8');
			result += myKey.final('utf8');
			res.json(result);
		})
		.catch(err => {
			console.log("err:",err.message);
			res.end("Failed");
		});
});

app.listen(5000);
console.log("Listening on 5000 ...");