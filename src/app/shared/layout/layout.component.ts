import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MatSidenavModule,MatButtonModule,
    MatIconModule,
    MatToolbarModule, RouterModule, MatListModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  opened=true;

  public links=[
    {
      icon: 'restaurant_menu',
      label:'Comidas',
      routerLink:'food/food-list'
    },
    {
      icon: '',
      label: 'Crear comida',
      routerLink:'food/form-food'
    }

]

public open(){
 if (this.opened) {
  this.opened=!this.opened
 }  else {
      this.opened=!this.opened
 }
 
}

}

