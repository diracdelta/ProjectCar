import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardetailsPage } from '../cardetails/cardetails';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private cars: Array<carInfo> = [];
  private selectedCar: string;

  constructor(public navCtrl: NavController) {
    for(var i = 0; i < 10; i++) {
      this.cars.push({carID: "" + (i+1)});
    }
  }

  cardetails(carID: string) {
    console.log("Will route to page 2");
    this.navCtrl.push(CardetailsPage, {
      carID: carID,
    })
  }

}

interface carInfo {
  carID: string
}
