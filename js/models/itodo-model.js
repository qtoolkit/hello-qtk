"use strict";
var TodoItem = (function () {
    function TodoItem(content, completed) {
        this.content = content;
        this.completed = completed;
    }
    TodoItem.create = function (content, completed) {
        return new TodoItem(content, completed);
    };
    return TodoItem;
}());
exports.TodoItem = TodoItem;
;
;
//# sourceMappingURL=itodo-model.js.map