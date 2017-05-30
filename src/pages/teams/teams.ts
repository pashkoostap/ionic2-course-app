import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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
    public loadingController: LoadingController,
    private apiService: ApiService) { }

  ionViewDidLoad() {
    let selectedTourney = this.navParams.data;

    let loader = this.loadingController.create({
      content: 'Pleas wait...'
    })

    loader.present().then(() => {
      this.apiService.getTournamentsData(selectedTourney.id).subscribe(data => {
        this.teams = data.teams;
        loader.dismiss();
      })
    })

  }

  itemTapped(event, team) {
    this.navCtrl.push(TeamHomePage, team);
  }
}
