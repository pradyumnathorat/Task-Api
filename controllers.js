const taskModel = require("./taskModel")

const postTasks = async (req, res) => {
    try {
        const data = req.body;
        const many = req.body.tasks
        if (many) {
            const data = await taskModel.insertMany(many)
            let arr = [];
            for ( let i = 0; i < data.length; i++) {
                arr.push({ id : data[i]._id})
            }
            res.status(201).json({ tasks: arr })
        } else {
            const task = await taskModel.create(data)
            res.status(201).json({ id: task._id })
        }
    } catch (err) {
        console.log(err);
    }
}

const getTasks = async (req, res) => {
    try {
        const tasks = await taskModel.find()
        res.status(200).json({ tasks: tasks })
    } catch (err) {
        console.log(err);
    }
}

const getOne = async (req, res) => {
    try {
        const { id } = req.params;
        const tasks = await taskModel.findById(id)
        res.status(200).json(tasks)
    } catch (err) {
        res.status(500).json({ error: "There is no task at that id" })
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const tasks = await taskModel.findByIdAndDelete(id)
        res.status(204).send("None")
    } catch (err) {
        res.status(204).send("None")
    }
}

const editTask = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const tasks = await taskModel.findByIdAndUpdate(id, data, { new: true });
        res.status(204).send("Edited")
    } catch (err) {
        res.status(404).json({ error: "There is no task at that id" })
    }
}

const deleteMany = async (req, res) => {
    try {
        const many = req.body.tasks;
        let arr = [];
        for (let i = 0; i < many.length; i++) {
            arr.push(many[i].id)
        }
        const tasks = await taskModel.deleteMany({ _id : { $in : arr } });
        return res.status(204).send("Deleted")
    } catch (err) {
        res.status(400).send(err.message)
    }
}

module.exports = { postTasks, getTasks, getOne, deleteTask, editTask, deleteMany }