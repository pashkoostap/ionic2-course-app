import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    private api: ApiService) { }

  itemTapped(e, item) {
    this.navCtrl.push(TeamsPage, item);
  }

  ionViewDidLoad() {
    this.api.getTournaments().then(data => this.tournaments = data);
  }
}
