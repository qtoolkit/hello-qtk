import { WindowNormal } from "qtk";
import { IViewModel } from "qtk";
export declare class MainWindow extends WindowNormal {
    protected viewModel: IViewModel;
    protected onInit(): void;
    static create(options: any): MainWindow;
}
