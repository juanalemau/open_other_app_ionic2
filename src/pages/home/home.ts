import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
  	public navCtrl: NavController,
  	public appBrowser: InAppBrowser) {

  }

  openNutricionista(){
  	  this.appBrowser.create('vnd.youtube://', '_system'); // Youtube
  }

}
