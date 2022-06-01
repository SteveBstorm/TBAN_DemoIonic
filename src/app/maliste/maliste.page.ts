import { FakeauthService } from './../services/fakeauth.service';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-maliste',
  templateUrl: './maliste.page.html',
  styleUrls: ['./maliste.page.scss'],
})
export class MalistePage implements OnInit {

  public connectionStatus: boolean;
  liste: string[] = ['Pomme', 'Carte graphique', 'Pignouf', 'Connasse',
  'Pomme', 'Carte graphique', 'Pignouf', 'Connasse',
  'Pomme', 'Carte graphique', 'Pignouf', 'Connasse',
  'Pomme', 'Carte graphique', 'Pignouf', 'Connasse',
  'Pomme', 'Carte graphique', 'Pignouf', 'Connasse',
  'Pomme', 'Carte graphique', 'Pignouf', 'Connasse',
  'Pomme', 'Carte graphique', 'Pignouf', 'Connasse',];
  constructor(
    private auth: FakeauthService,
    private actionSheet: ActionSheetController
  ) { }

  ngOnInit() {
    this.auth.mysubject.subscribe({
      next: (data: boolean) => {this.connectionStatus = data;}
    });
    this.auth.emitSubject();
  }

  async showAction(index: number) {
    const as = await this.actionSheet.create({
      header: 'Actions possible',
      buttons: [{
        text: 'Supprimer',
        handler: () => {this.liste.splice(index, 1);}
      },
      {
        text: 'Détails',
        handler: () => {console.log(this.liste[index]);}
      }
    ]
    });
    await as.present();
  }

}
