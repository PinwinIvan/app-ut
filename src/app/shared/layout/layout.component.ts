import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

import { log } from 'console';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MatSidenavModule,MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

opened=true;

public open(){
 if (this.opened) {
  this.opened=!this.opened
 }  else {
      this.opened=!this.opened
 }
 
}

}

