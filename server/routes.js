const express = require("express");
const router = express.Router(); 
const { getConnectedClient } = require("./database");
const { ObjectId } = require("mongodb"); 
const { faSleigh } = require("@fortawesome/free-solid-svg-icons");

const getCollection = () => {
    const client = getConnectedClient();
    const collection = client.db("todosdb").collection("todos");
    return collection;
}

//GET /todos
router.get("/todos", async (req, res) =>{
    const collection = getCollection();
    const todos = await collection.find({}).toArray();
    res.status(200).json(todos);
});

//POST /todos
router.post("/todos", async (req, res) => {
    const collection = getCollection();
    let { todo } = req.body;

    if(!todo){
        return res.status(400).json({ mssg: "error todo not found"});
    }

    todo = (typeof todo === "string") ? todo : JSON.stringify(todo);

    const newToDo = await collection.insertOne({todo, completed: false});

    res.status(201).json({ todo, completed: false, _id: newToDo.insertedId});
});

//DELETE /todos
router.delete("/todos/:id", async (req, res) => {
    const collection = getCollection();
    const _id = new ObjectId(req.params.id);

    const deletedToDo = await collection.deleteOne({ _id });

    res.status(200).json(deletedToDo);
});

//PUT /todos
router.put("/todos/:id", async (req, res) => {
    const collection = getCollection();
    const _id = new ObjectId(req.params.id);
    const { completed } = req.body;
    let updatedTodo;
    if (typeof completed !== "boolean") {
        return res.status(400).json({ mssg: "invalid status" });
    }
    if(typeof completed === "boolean"){
        updatedTodo = await collection.updateOne({ _id }, { $set: { completed: !completed } });
    }
    res.status(200).json(updatedTodo);
});


module.exports = router;