import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TeamHomePage } from '../';
import { ApiService } from '../../shared';

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {
  game: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private apiService: ApiService) { }

  ionViewDidLoad() {
    this.game = this.navParams.data;
  }

  teamTapped(teamId) {
    let tourneyData = this.apiService.getCurrentTourney();
    let team = tourneyData.teams.filter(team => team.id == teamId)[0];
    this.navCtrl.push(TeamHomePage, team);
  }
}
