import { Component , OnInit} from '@angular/core';
import {AppareilService} from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  lastUdapte = new Date();
  appareils: any[];

  constructor(private appareilService: AppareilService) {

}

ngOnInit() {
  this.appareils = this.appareilService.appareils;
}
  /* mis en commentaire
  title = 'primpasAng';
  isAuth=true;
  */

onAllumer() {
  alert('vous allumez tout');
  console.log('Tout est allumer');
  }
}
