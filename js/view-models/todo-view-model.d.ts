import { ValidationResult } from "qtk";
import { CollectionViewModel } from "qtk";
export declare class TodoViewModel extends CollectionViewModel {
    protected _newContent: string;
    constructor(data: Array<any>);
    getProp(path: string, converterName?: string): any;
    setProp(path: string, value: any, converterName?: string, validationRule?: string): ValidationResult;
    protected initFilters(): void;
    protected clearCompleted(): void;
    protected canClearCompleted(): boolean;
    protected createNew(): void;
    protected initCommands(): void;
    protected initConverters(): void;
    static create(data: Array<any>): TodoViewModel;
}
