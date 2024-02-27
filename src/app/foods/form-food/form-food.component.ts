import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, 
         ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Food } from '../shared/food.model';
import { FoodService } from '../shared/food.service';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-form-food',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule,FormsModule,MatButtonModule],
  templateUrl: './form-food.component.html',
  styleUrl: './form-food.component.scss'
})

export class FormFoodComponent {


  addMenuItem = this.formBuilder.group({

    foodName: ['', [Validators.required]],
    foodCategory: ['', [Validators.required]],
    foodImage: ['', [Validators.required]],
    foodDesc: ['', [Validators.required, Validators.minLength(20)]],
    foodPrice: ['', [Validators.required, Validators.min(1)]]

  });

  constructor(private formBuilder: FormBuilder, public serviceFood: FoodService) { }

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
        this.serviceFood.addNewMenuItem(menuItem);
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
