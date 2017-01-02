import { Application } from "qtk";
import { TodoViewModel } from "./view-models/todo-view-model";
export declare class TodoApp extends Application {
    protected createViewModel(): TodoViewModel;
    onReady(): void;
    static run(): TodoApp;
}
