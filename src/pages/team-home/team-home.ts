import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StandingsPage, TeamDetailPage } from '../';

@IonicPage()
@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html',
})
export class TeamHomePage {
  teamDetailTab = TeamDetailPage;
  stanginsTab = StandingsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
