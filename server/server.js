const express = require('express');
const mongodb = require('mongodb');
const app = express();
const port = 5000;

const MongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    console.log("Database connected!");
    db.close();
})

app.get('/hello', (req, res) => {
    res.status(200).json({ mssg: "hello world"});
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});