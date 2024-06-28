const express = require('express');
const Task = require('../modals/task');
const router = express.Router();
const mon=require("mongoose")

// Get all tasks
router.get('/fetch', async (req, res) => {
  try {
    Task.db("Node").collection("Trial").find().toArray().then((result)=>{
    res.json(result);})
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

// Create a new task
router.post('/create', async (req, res) => {
  try {
    const task = req.body;
    console.log(task);
    Task.db("Node").collection("Trial").insertOne(task);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' });
  }
});

// Get a task by ID
router.get('/:id', async (req, res) => {
  try {
    Task.db("Node").collection("Trial").find({_id:new mon.Types.ObjectId(req.params.id)}).toArray().then((result)=>{
      res.json(result);})
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch task' });
  }
});

// Update a task
router.put('/update/:id', async (req, res) => {
  try {
    const task = req.body;
    console.log(task);
    Task.db("Node").collection("Trial").updateMany({_id:new mon.Types.ObjectId(req.params.id)},{$set:{title:task.title,description:task.description,due_date:task.due_date}}).then(res.status(204).end());
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task' });
  }
});

// Delete a task
router.post('/delete/:id', async (req, res) => {
  try {
    const task = req.body;
    console.log(req.params.id);
    Task.db("Node").collection("Trial").deleteMany({_id:new mon.Types.ObjectId(req.params.id)});
    res.status(204).end();
    // if (task) {
    //   
    // } else {
    //   res.status(404).json({ error: 'Task not found' });
    // }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

module.exports = router;
