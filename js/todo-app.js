"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var qtk_1 = require("qtk");
var main_window_1 = require("./views/main-window");
var todo_model_1 = require("./models/todo-model");
var todo_view_model_1 = require("./view-models/todo-view-model");
var appThemeDataURL = "https://qtoolkit.github.io/qtk-todo-mvc/assets/theme/default/theme.json";
var themeDataURL = "https://qtoolkit.github.io/demos/assets/theme/default/theme.json";
var TodoApp = (function (_super) {
    __extends(TodoApp, _super);
    function TodoApp() {
        _super.apply(this, arguments);
    }
    TodoApp.prototype.createViewModel = function () {
        var model = new todo_model_1.TodoModel();
        window.onunload = function () {
            model.save();
        };
        return todo_view_model_1.TodoViewModel.create(model.load().data);
    };
    TodoApp.prototype.onReady = function () {
        var viewModel = this.createViewModel();
        var mainWindow = main_window_1.MainWindow.create({ app: this, viewModel: viewModel }).maximize();
    };
    TodoApp.run = function () {
        var app = new TodoApp("todomvc");
        app.init({ sysThemeDataURL: themeDataURL, appThemeDataURL: appThemeDataURL });
        app.run();
        return app;
    };
    return TodoApp;
}(qtk_1.Application));
exports.TodoApp = TodoApp;
;
//# sourceMappingURL=todo-app.js.map