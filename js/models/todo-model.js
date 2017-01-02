"use strict";
var itodo_model_1 = require("./itodo-model");
var TodoModel = (function () {
    function TodoModel() {
    }
    TodoModel.prototype.save = function () {
        var str = JSON.stringify(this.data);
        localStorage.setItem("qtk-todos", str);
        return this;
    };
    TodoModel.prototype.load = function () {
        var str = localStorage.getItem("qtk-todos");
        if (str) {
            var items = JSON.parse(str);
            this.data = items.map(function (item) {
                return itodo_model_1.TodoItem.create(item.content, item.completed);
            });
        }
        else {
            this.data = [];
        }
        return this;
    };
    return TodoModel;
}());
exports.TodoModel = TodoModel;
;
//# sourceMappingURL=todo-model.js.map