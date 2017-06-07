import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ApiService } from '../../shared/';

import { TeamHomePage } from '../';
import * as _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {
  private allTeams: any;
  private allTeamsDivisions: any;
  public teams: Array<any> = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingController: LoadingController,
    private apiService: ApiService) { }

  ionViewDidLoad() {
    let selectedTourney = this.navParams.data;

    let loader = this.loadingController.create({
      content: 'Please wait...'
    })

    loader.present().then(() => {
      this.apiService.getTournamentsData(selectedTourney.id).subscribe(data => {
        this.allTeams = data.teams;
        this.teams = data.teams;
        this.allTeamsDivisions =
          _.chain(data.teams)
            .groupBy('division')
            .toPairs()
            .map(item => _.zipObject(['divisionName', 'divisionTeams'], item))
            .value();
        this.teams = this.allTeamsDivisions;
        loader.dismiss();
      })
    })

  }

  itemTapped(event, team) {
    this.navCtrl.push(TeamHomePage, team);
  }
}
