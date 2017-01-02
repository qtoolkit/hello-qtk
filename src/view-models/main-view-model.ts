import {DelegateValueConverter, DelegateFilter, DelegateComparator, ValidationResult} from "qtk";
import {KeyEvent, Events, ViewModel, DelegateCommand} from "qtk";

export class MainViewModel extends ViewModel {
	protected _newContent : string;

	constructor(data:any) {
		super(data);
		this.initFilters();
		this.initCommands();
		this.initConverters();
	}

	protected initFilters() {
	}

	protected initCommands() {
	}

	protected initConverters() {
	}

	public static create(data:any): MainViewModel {
		return new MainViewModel(data);
	}
}
