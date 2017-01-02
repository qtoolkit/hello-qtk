"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var qtk_1 = require("qtk");
var qtk_2 = require("qtk");
var itodo_model_1 = require("../models/itodo-model");
var TodoViewModel = (function (_super) {
    __extends(TodoViewModel, _super);
    function TodoViewModel(data) {
        _super.call(this, data);
        this.initFilters();
        this.initCommands();
        this.initConverters();
    }
    TodoViewModel.prototype.getProp = function (path, converterName) {
        if (path.indexOf("$total") >= 0) {
            return this.convert(converterName, this.total);
        }
        if (path.indexOf("$new-content") >= 0) {
            return this._newContent;
        }
        return _super.prototype.getProp.call(this, path, converterName);
    };
    TodoViewModel.prototype.setProp = function (path, value, converterName, validationRule) {
        if (path.indexOf("$new-content") >= 0) {
            this._newContent = value;
            return qtk_1.ValidationResult.validResult;
        }
        return _super.prototype.setProp.call(this, path, value, converterName, validationRule);
    };
    TodoViewModel.prototype.initFilters = function () {
        this.registerFilter("active", qtk_1.DelegateFilter.create(function (item) { return !item.completed; }));
        this.registerFilter("completed", qtk_1.DelegateFilter.create(function (item) { return item.completed; }));
    };
    TodoViewModel.prototype.clearCompleted = function () {
        this.removeItems(function (item) { return item.completed; });
    };
    TodoViewModel.prototype.canClearCompleted = function () {
        return this.collection.some(function (item) { return item.completed; });
    };
    TodoViewModel.prototype.createNew = function () {
        var content = this._newContent;
        var hasItems = this.hasItems(function (item) { return item.content === content; });
        if (content && !hasItems) {
            this.addItem(itodo_model_1.TodoItem.create(content, false));
        }
    };
    TodoViewModel.prototype.initCommands = function () {
        var _this = this;
        this.registerCommand("filter", qtk_2.DelegateCommand.create(function (args) { return _this.filter = args.filter; }, null));
        this.registerCommand("clearCompleted", qtk_2.DelegateCommand.create(function (args) { return _this.clearCompleted(); }, function () { return _this.canClearCompleted(); }));
        this.registerCommand("new", qtk_2.DelegateCommand.create(function (args) { return _this.createNew(); }, function () { return !!_this._newContent; }));
    };
    TodoViewModel.prototype.initConverters = function () {
        this.registerValueConverter("itemLeft", qtk_1.DelegateValueConverter.create(function (value) { return value + " items left"; }, null));
    };
    TodoViewModel.create = function (data) {
        return new TodoViewModel(data);
    };
    return TodoViewModel;
}(qtk_2.CollectionViewModel));
exports.TodoViewModel = TodoViewModel;
//# sourceMappingURL=todo-view-model.js.map