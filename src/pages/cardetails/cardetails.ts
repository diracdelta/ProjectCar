import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CardetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cardetails',
  templateUrl: 'cardetails.html',
})
export class CardetailsPage {
  public carID;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.carID = navParams.get("carID");
    console.log(this.carID);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardetailsPage');
  }

}

