const express = require('express');
require("dotenv").config();
const { connectToMongoDB } = require("./database");

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

const router = require('./routes');

app.use("/api", router);

async function startServer() {
    await connectToMongoDB();
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`)
    });
}
startServer();