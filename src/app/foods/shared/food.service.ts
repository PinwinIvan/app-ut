import { Injectable } from '@angular/core';
import {Food} from './food.model'

@Injectable({
  providedIn: 'root'
})

export class FoodService {
  menu:Food[]=[
    {
      id:1,
      name:'Pizza',
      description:'1800KCal',
      image: 'https://www.bhg.com/thmb/49ZhpV0sEAvrQGm55x0VIk7tuSQ=/1244x0/filters:no_upscale():strip_icc()/deep-dish-pizza-R162090-31bde0c81270469d8bdbc3c25107eda6.jpg',
      category: 'food',
      price: 250
    },
    {
      id: 2,
      name: 'Tacos al Pastor',
      description:'6tacos',
      image: 'https://www.comedera.com/wp-content/uploads/2017/08/tacos-al-pastor-receta.jpg',
      category: 'food',
      price: 120
    },
    {
      id: 3,
      name: 'Ceviche',
      description: 'Camaron, pulpo y limoncito.',
      image: 'https://laroussecocina.mx/wp-content/uploads/2023/03/Tostadas-de-ceviche-mixto.jpg',
      category: 'food',
      price: 170
    },
    {
      id: 4,
      name: 'Cafe con Chocolate Maya',
      description: 'Si funciona',
      image: 'https://www.elmejornido.com/sites/g/files/jgfbjl316/files/srh_recipes/432364bea8f1cafd2170177e2cbc17c2.jpg',
      category: 'drink',
      price: 40
    },
    {
      id: 5,
      name: 'Pescado al Mojo de Ajo',
      description: 'Pregunta por cuales pescados tenemos disponibles.',
      image: 'https://www.comedera.com/wp-content/uploads/2023/02/Pescado-al-mojo-de-ajo.jpg',
      category: 'food',
      price: 180
    },
    {
      id:6,
      name: 'Margarita de Jamaica',
      description: 'Sos',
      image: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/cebd1e0a0bb36d8861c139c8382bd69a/Derivates/4c9bd240ee8ccf662635f8a7f89c65e0f30ac08a.jpg',
      category: 'drink',
      price: 50
    },
    {
      id:7,
      name: 'Enchiladas Verdes',
      description: 'LA Especialidas',
      image: 'https://cdn0.recetasgratis.net/es/posts/3/5/2/enchiladas_verdes_mexicanas_42253_orig.jpg',
      category: 'food',
      price: 100
    },
    {
      id: 8,
      name: 'Agua de Jamaica',
      description: 'Jamaica',
      image: 'https://cdn7.kiwilimon.com/recetaimagen/3630/640x640/15252.jpg.webp',
      category: 'drink',
      price: 20
    }
  ]

    constructor(){}

    getAllFoods():Food[]{
      return this.menu;
      
    }
    public addNewMenuItem(food:Food){
      this.menu.push(food)
    }
    public updateMenuItem(food:Food){
        //this.menu.setValue()
    }
    public deleteMenuItem(food:Food) {
      
    }
}
