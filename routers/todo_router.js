const router = require("express").Router();
const ToDoController = require('../controller/todo_controller')

router.post("/addtodo",ToDoController.createToDo);

router.post('/getToDoList',ToDoController.getToDoList)

router.post("/deleteTodo",ToDoController.deleteToDo)

module.exports = router;