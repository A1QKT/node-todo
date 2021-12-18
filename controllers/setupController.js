var Todos = require("../models/todoModel");

module.exports = function (app) {
    app.get("/api/setUpToDo", function (req, res) {
        var dummyToDos = [
            {
                username: "test",
                todo: "Coding",
                isDone: false,
                hasAttachment: false,
            },
            {
                username: "Phuong",
                todo: "Buying Food",
                isDone: false,
                hasAttachment: false,
            },
            {
                username: "Nhan",
                todo: "Fixing light",
                isDone: false,
                hasAttachment: false,
            },
        ];
        Todos.create(dummyToDos, function (err, results) {
            res.send(results);
        })
    })
}