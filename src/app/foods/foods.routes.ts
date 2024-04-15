import { Route } from "@angular/router";
import { FoodListComponent } from "./food-list/food-list.component";
import { FoodsComponent } from "./foods.component";
import { HomeComponent } from "../home/home.component";
import { FormFoodComponent } from "./form-food/form-food.component";
import { FoodDetailsComponent } from "./food-details/food-details.component";

export default[
    {path: 'food-list',component: FoodListComponent, title:'Menu'},
    {path: 'form', component: FormFoodComponent, title: 'Crear Comida'},
    {path: 'food-details/:id', component: FoodDetailsComponent, title :'Detalles'},
    {path: 'form/:id', component: FormFoodComponent, title:'Editar Comida'}
] satisfies Route[];