import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {


appareilName = 'machine à laver';
appareilStatus = 'allumé';
isAuth = true;
  constructor() { }

  ngOnInit() {
  }

  getStatus() {
   return this.appareilStatus;
  }

  getColor(){
    if (this.appareilStatus == 'éteint'){
      return 'red';
    }else if (this.appareilStatus == 'allumé'){
       return 'green';
    }
  }

}
