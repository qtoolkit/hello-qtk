import { ViewModel } from "qtk";
export declare class MainViewModel extends ViewModel {
    protected _newContent: string;
    constructor(data: any);
    protected initFilters(): void;
    protected initCommands(): void;
    protected initConverters(): void;
    static create(data: any): MainViewModel;
}
