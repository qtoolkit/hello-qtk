import {WindowNormal, SimpleLayouter, SimpleLayouterParam} from "qtk"
import {IViewModel, ViewModel, ListView, Edit, Group, RadioButton, Button, Rect, Label} from "qtk";

export class MainWindow extends WindowNormal {
	protected viewModel : IViewModel;

	protected onInit() {
		super.onInit();

		this.childrenLayouter = SimpleLayouter.create();

		var label = Label.create({
			dataBindingRule:"title",
			layoutParam :SimpleLayouterParam.create({x:"center", y:"middle", w:"100", h:"90"})
		});

		this.addChild(label);
		
		this.bindData(this.viewModel);
	}

	public static create(options:any) : MainWindow {
		var win = new MainWindow();
		win.reset("main-window", options);
		win.open();

		return win;
	}
};


