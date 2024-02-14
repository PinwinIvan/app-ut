import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodListComponent } from './foods/food-list/food-list.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'food', loadChildren:() => import ('./foods/foods.routes')}
];
