export class MainModel {
	public title : any;
	public constructor() {
		this.title = "Hello QTK";
	}

	public static create() : MainModel {
		return new MainModel();
	}
};
