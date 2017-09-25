import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

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

  @ViewChild(Slides) slides: Slides;

  public carID;

  private images: Array<number> = [1,2,3,4];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.carID = navParams.get("carID");
    console.log(this.carID);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardetailsPage');
  }

  schedule(carID: string) {
    // Uncomment once the schedule page is available
    // Will also require an import statement for the same page
    // this.navCtrl.push(<replace with schedule page name>, {
    // this.carID= carID})
  }
}

