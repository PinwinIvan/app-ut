import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder, FormControl, FormGroup, FormsModule,
  ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Food } from '../shared/food.model';
import { FoodService } from '../shared/food.service';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { DIR_DOCUMENT } from '@angular/cdk/bidi';


@Component({
  selector: 'app-form-food',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule,
    MatSelectModule, FormsModule, MatButtonModule],
  templateUrl: './form-food.component.html',
  styleUrl: './form-food.component.scss'
})

export class FormFoodComponent implements OnInit {


  addMenuItem = this.formBuilder.group({

    foodName: ['', [Validators.required]],
    foodCategory: ['', [Validators.required]],
    foodImage: ['', [Validators.required]],
    foodDesc: ['', [Validators.required, Validators.minLength(20)]],
    foodPrice: ['', [Validators.required, Validators.min(1)]]

  });

  constructor(private formBuilder: FormBuilder, public serviceFood: FoodService, public router:Router) { }

  route: ActivatedRoute = inject(ActivatedRoute);
  foodId: number = -1;
  edit: boolean = false;
  food?: Food = {
    id: 0,
    name: '',
    description: '',
    category: '',
    image: '',
    price: 0
  }

  ngOnInit(): void {
    if (this.route.snapshot.params['id']) {
      this.edit = true;
      console.log("Can edit? " + this.edit);
      this.foodId = Number(this.route.snapshot.params['id']);
      this.serviceFood.getAnArticle(this.foodId).subscribe({
        next:(value) => this.updateForm(value),
        error:(err) => console.error(err),
        complete:() => console.info('complete')
      })
    }
  }

  public updateForm(food:Food):void{
    if (food) {
      //this.foodName?.setValue(this.food.name)
      this.addMenuItem.patchValue({
        foodName: food.name,
        foodCategory: food.category,
        foodDesc: food.description,
        foodImage: food.image,
        foodPrice: food.price.toString()
      })
    }
  }

  public sendMenuItem() {
    //validar form
    if (this.addMenuItem.status == 'VALID') {
      //validar dato
      if (this.foodName?.value && this.foodDesc?.value && this.foodCategory?.value && this.foodImage?.value && this.foodPrice?.value) {
        let priceParsed = parseInt(this.foodPrice?.value)
        //creando el objeto
        let menuItem: Food = {

          name: this.foodName.value,
          description: this.foodDesc.value,
          category: this.foodCategory.value,
          image: this.foodImage.value,
          price: priceParsed
        }
        console.log(menuItem);
        this.serviceFood.addFood(menuItem).subscribe({
          next:(value) =>(this.food = value),
          error:(err) => console.error(err),
          complete:() => console.info('complete')
        });
        //this.serviceFood.addNewMenuItem(menuItem);
        this.router.navigate(['/food/food-list']);
      }
    }
  }

  public updateMenuItem() {
    if (this.addMenuItem.status == 'VALID') {
      //validar dato
      if (this.foodName?.value && 
          this.foodDesc?.value && 
          this.foodCategory?.value && 
          this.foodImage?.value && 
          this.foodPrice?.value
         ) {
        let priceParsed = parseInt(this.foodPrice?.value)
        //creando el objeto
        let menuItem: Food = {
          id:this.foodId,
          name: this.foodName.value,
          description: this.foodDesc.value,
          category: this.foodCategory.value,
          image: this.foodImage.value,
          price: priceParsed
        };
        
        this.serviceFood.addFood(menuItem).subscribe({
          next:(value) =>(this.food = value),
          error:(err) => console.error(err),
          complete:() => this.router.navigate(['/food/food-list']),
        });        
        ;
      }
    }
  }





  get foodName() {
    return this.addMenuItem.get('foodName');
  }

  get foodCategory() {
    return this.addMenuItem.get('foodCategory');
  }

  get foodImage() {
    return this.addMenuItem.get('foodImage');
  }

  get foodDesc() {
    return this.addMenuItem.get('foodDesc');
  }
  get foodPrice() {
    return this.addMenuItem.get('foodPrice');
  }

}
