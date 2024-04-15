import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MediaMatcher} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: 
  [MatSidenavModule,MatButtonModule,
    MatIconModule,
    MatToolbarModule, RouterModule, MatListModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnDestroy{
  mobileQuery: MediaQueryList;

//opened=true;
  public links=[
    {
      icon: 'restaurant_menu',
      label:'Comidas',
      routerLink:'food/food-list'
    },
    {
      icon: '',
      label: 'Crear comida',
      routerLink:'food/form'
    }

]

private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}

