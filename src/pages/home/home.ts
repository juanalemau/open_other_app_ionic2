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
  }
}
