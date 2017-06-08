import { Component } from '@angular/core';
import { LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';

import { TeamsPage } from '../';
import { ApiService } from '../../shared';

@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {
  tournaments: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingController: LoadingController,
    private api: ApiService) { }

  itemTapped(e, item) {
    this.navCtrl.push(TeamsPage, item);
  }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Please wait...',
      spinner: 'dots'
    })

    loader.present().then(() => {
      this.api.getTournaments().then(data => {
        this.tournaments = data;
        loader.dismiss();
      });
    })
  }
}
