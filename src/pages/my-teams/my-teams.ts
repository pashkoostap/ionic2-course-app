import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TournamentsPage } from '../';

@IonicPage()
@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html',
})
export class MyTeamsPage {

  constructor(private navCtrl: NavController, public navParams: NavParams) { }

  goToTournament() {
    this.navCtrl.push(TournamentsPage);
  }
}
