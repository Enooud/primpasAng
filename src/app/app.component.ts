import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    appareils= [
    {
      name: 'Woofer',
      status: 'éteint'  
        
    },
    {
        name: 'télivision',
        status: 'alumer'  
    },
    
    {
        name:'ordinateur',
        status:'éteint'
    }
    
]; 
    
  /* mis en commentaire 
  title = 'primpasAng';
  isAuth=true; 
  */

onAllumer()
{
    alert('vous allumez tout');
    console.log('Tout est allumer');
}
}

