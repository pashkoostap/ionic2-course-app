import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiService } from "../../shared/";
import * as _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-standings',
  templateUrl: 'standings.html',
})
export class StandingsPage {
  standings: any[];
  team: any;
  allStandings: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private apiService: ApiService) { }
  ionViewDidLoad() {
    this.team = this.navParams.data;
    let tourneyData = this.apiService.getCurrentTourney();
    this.standings = tourneyData.standings;

    this.allStandings = 
      _.chain(this.standings)
       .groupBy('division')
       .toPairs()
       .map(item => _.zipObject(['divisionName', 'divisionStandings'], item))
       .value()
  }
}
