import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as _ from 'lodash';

import { GamePage } from '../';
import { ApiService } from '../../shared';

@IonicPage()
@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html',
})
export class TeamDetailPage {
  games: any[];
  team: any;
  teamStanding: any;
  private tourneyData: any;

  constructor(
    public navCtrl: NavController,
    public apiService: ApiService,
    public navParams: NavParams) {
    this.team = this.navParams.data;
  }

  ionViewDidLoad() {
    this.tourneyData = this.apiService.getCurrentTourney();
    this.games = this.tourneyData.games.filter(game => {
      return game.team1Id == this.team.id || game.team2Id == this.team.id
    }).map(game => {
      let isTeam1 = (game.team1Id == this.team.id);
      let opponentName = isTeam1 ? game.team2 : game.team1;
      let scoreDisplay = this.getScoreDisplay(isTeam1, game.team1Score, game.team2Score);
      return {
        gameId: game.id,
        opponent: opponentName,
        time: Date.parse(game.time),
        location: game.location,
        locationUrl: game.locationUrl,
        scoreDisplay: scoreDisplay,
        homeAway: (isTeam1 ? 'vs. ' : 'at')
      }
    })
    this.teamStanding = _.find(this.tourneyData.standings, { 'teamId': this.team.id });
  }

  getScoreDisplay(isTeam1, team1Score, team2Score) {
    if (team1Score && team2Score) {
      let teamScore = (isTeam1 ? team1Score : team2Score);
      let opponentScore = (isTeam1 ? team2Score : team1Score);
      let winIndicator = teamScore > opponentScore ? 'W: ' : 'L: ';
      return `${winIndicator + teamScore}-${opponentScore}`;
    } else {
      return '';
    }
  }

  gameSelect(e, selectedGame) {
    let soursePage = this.tourneyData.games.filter(game => game.id == selectedGame.gameId)[0];
    this.navCtrl.parent.parent.push(GamePage, soursePage);
  }
}
