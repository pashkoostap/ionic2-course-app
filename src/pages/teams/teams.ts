import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiService } from '../../shared/';

import { TeamHomePage } from '../';

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {
  selectedTourney: any;
  teams = []

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private apiService: ApiService) { }

  ionViewDidLoad() {
    let selectedTourney = this.navParams.data;
    console.log(selectedTourney)
    this.apiService.getTournamentsData(selectedTourney.id).subscribe(data => {
      this.teams = data.teams;
    })
  }

  itemTapped(event, team) {
    this.navCtrl.push(TeamHomePage, team);
  }
}
