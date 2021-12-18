var ToDos = require("../models/todoModel");
var bodyParser = require("body-parser");

module.exports = function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.get("/api/todos/:uname", function (req, res) {
        ToDos.find({ username: req.params.uname }, function (err, result) {
            if (err) throw err;
            res.send(result);
        })
    });
    app.get("/api/todos/:id", function (req, res) {
        ToDos.findById({ _id: req.params.id }, function (err, result) {
            if (err) throw err;
            res.send(result);
        })
    });
    app.post("/api/todos", function (req, res) {
        if (req.body.id) {
            ToDos.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment,
            }, function (err, result) {
                if (err) throw err;
                res.send("susscess");
            })
        }
        else {
            var newToDo = ToDos({
                username: req.body.username,
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment,
            })
            newToDo.save(function (err, result) {
                if (err) throw err;
                res.send("susscess");
            });
        }
    });
    app.delete("/api/todos", function (req, res) {
        ToDos.findByIdAndRemove({ _id: req.body.id }, function (err) {
            if (err) throw err;
            res.send("susscess");
        })
    });
}