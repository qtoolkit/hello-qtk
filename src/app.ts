import {Application}    from "qtk";
import {MainModel}      from "./models/main-model";
import {MainWindow}     from "./views/main-window"
import {MainViewModel}  from "./view-models/main-view-model";

var appThemeDataURL = "https://qtoolkit.github.io/qtk-todo-mvc/assets/theme/default/theme.js";
var themeDataURL = "https://qtoolkit.github.io/demos/assets/theme/default/theme.js";

export class App extends Application {
	public onReady() {
		var viewModel = MainViewModel.create(MainModel.create());
		var mainWindow = MainWindow.create({app:this, viewModel:viewModel}).maximize();
	}
	
	public static run() : App {
		var app = new App("hello world");
		var assetsURLs = [themeDataURL, appThemeDataURL];

		app.preload(assetsURLs, function() {
			app.init({sysThemeDataURL:themeDataURL, appThemeDataURL:appThemeDataURL});
			app.run();
		});

		return app;
	}
};
