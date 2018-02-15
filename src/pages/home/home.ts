import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
  	public navCtrl: NavController,
  	public launchNavigator: LaunchNavigator) {

  }

  openNutricionista(){
    // Default handlers
	let successCallback = function(data) {
		alert("Success!");
		// if calling canLaunch() with getAppList:true, data will contain an array named "appList" with the package names of applications that can handle the uri specified.
	};
	let errorCallback = function(errMsg) {
		alert("Error! " + errMsg);
	}

	window.plugins.launcher.canLaunch({packageName:'com.coe.bcp.nutricionista'}, successCallback, errorCallback);
  }
}
