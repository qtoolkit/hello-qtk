import { ListItem, Rect } from "qtk";
export declare class TodoListItem extends ListItem {
    constructor();
    relayoutChildren(): Rect;
    onInit(): void;
    static TYPE: string;
    private static rBin;
    static createTemplateItem(options?: any): TodoListItem;
    static create(options?: any): TodoListItem;
}
