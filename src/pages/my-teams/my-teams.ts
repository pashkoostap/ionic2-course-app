import { Component } from '@angular/core';
import { LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';

import { TeamHomePage, TournamentsPage } from '../';
import { ApiService } from '../../shared';

@IonicPage()
@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html',
})
export class MyTeamsPage {
  favorites = [
    {
      team: {
        id: 1,
        name: 'Name 1',
        coach: 'Coach 1'
      },
      tournamentId: 'id 1',
      tournamentName: 'tournament name 1'
    },
    {
      team: {
        id: 2,
        name: 'Name 2',
        coach: 'Coach 2'
      },
      tournamentId: 'id 2',
      tournamentName: 'tournament name 2'
    }
  ]

  constructor(
    private navCtrl: NavController,
    public navParams: NavParams,
    private apiService: ApiService,
    private loadingController: LoadingController) { }

  goToTournament() {
    this.navCtrl.push(TournamentsPage);
  }

  favoriteTapped(e, favorite) {
    let loader = this.loadingController.create({
      content: 'Getting data...',
      dismissOnPageChange: true
    })
    loader.present();
    this.apiService.getTournamentsData(favorite.tournamentId).subscribe(team =>{
      this.navCtrl.push(TeamHomePage, favorite.team);
    })
  }
}
