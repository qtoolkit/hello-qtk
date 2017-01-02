import { TodoItem, ITodoModel } from "./itodo-model";
export declare class TodoModel {
    data: Array<TodoItem>;
    save(): ITodoModel;
    load(): ITodoModel;
}
