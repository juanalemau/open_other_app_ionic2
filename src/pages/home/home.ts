import { Component } from '@angular/core';
import { Device } from '@ionic-native/device';
import { AppAvailability } from '@ionic-native/app-availability';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
  	public navCtrl: NavController) {

  }

  launchExternalApp(iosSchemaName: string, androidPackageName: string, appUrl: string, httpUrl: string, username: string) {
	let app: string;
	if (Device.device.platform === 'iOS') {
		app = iosSchemaName;
	} else if (Device.device.platform === 'Android') {
		app = androidPackageName;
	} else {
		let browser = new InAppBrowser(httpUrl + username, '_system');
		return;
	}

	AppAvailability.check(app).then(
		() => { // success callback
			let browser = new InAppBrowser(appUrl + username, '_system');
		},
		() => { // error callback
			let browser = new InAppBrowser(httpUrl + username, '_system');
		}
	);
}


  openNutricionista(){
  	this.launchExternalApp('fb://', 'com.facebook.katana', 'fb://profile/', 'https://www.facebook.com/', '');
  }
}
