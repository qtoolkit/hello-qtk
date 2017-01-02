"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var qtk_1 = require("qtk");
var qtk_2 = require("qtk");
var TodoListItem = (function (_super) {
    __extends(TodoListItem, _super);
    function TodoListItem() {
        _super.call(this, TodoListItem.TYPE);
    }
    TodoListItem.prototype.relayoutChildren = function () {
        var r = this.getLayoutRect();
        if (this.w && this.h) {
            var x = r.x;
            var h = r.h;
            var w = r.h;
            var y = r.y;
            var completeButton = this.findChildByName("completed");
            var contentLabel = this.findChildByName("content");
            var removeButton = this.findChildByName("remove");
            if (completeButton) {
                completeButton.moveResizeTo(x, y, w, h);
            }
            if (removeButton) {
                removeButton.moveResizeTo(this.w - r.x - r.h, y, w, h);
            }
            if (contentLabel) {
                contentLabel.moveResizeTo(r.x + r.h, y, r.w - 2 * r.h, h);
            }
        }
        return r;
    };
    TodoListItem.prototype.onInit = function () {
        _super.prototype.onInit.call(this);
        var removeButton = this.findChildByName("remove");
        this.on(qtk_1.Events.POINTER_ENTER, function (evt) { return removeButton.visible = true; });
        this.on(qtk_1.Events.POINTER_LEAVE, function (evt) { return removeButton.visible = false; });
    };
    TodoListItem.createTemplateItem = function (options) {
        var item = TodoListItem.create(options);
        item.addChild(qtk_2.CheckButton.create({ styleType: "completed", name: "completed", dataBindingRule: "completed" }));
        item.addChild(qtk_2.Label.create({ name: "content", dataBindingRule: "content" }));
        item.addChild(qtk_2.Button.create({ styleType: "button.remove", name: "remove", visible: false,
            dataBindingRule: { click: { command: "remove" } } }));
        return item;
    };
    TodoListItem.create = function (options) {
        return TodoListItem.rBin.create(options);
    };
    TodoListItem.TYPE = "list-item";
    TodoListItem.rBin = qtk_2.WidgetRecyclableCreator.create(TodoListItem);
    return TodoListItem;
}(qtk_2.ListItem));
exports.TodoListItem = TodoListItem;
;
qtk_2.WidgetFactory.register(TodoListItem.TYPE, TodoListItem.create);
//# sourceMappingURL=todo-list-item.js.map