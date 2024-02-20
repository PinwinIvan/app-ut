import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-form-food',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './form-food.component.html',
  styleUrl: './form-food.component.scss'
})

export class FormFoodComponent{
  

  addMenuItem= this.formBuilder.group({

      foodName: ['', [Validators.required]], 
      foodCategory: ['', [Validators.required]],
      foodImage: ['', Validators.required],
      foodDesc: ['', [Validators.required, Validators.minLength(20)]],
      foodPrice: ['', [Validators.required, Validators.min(1)]]

    });

    constructor(private formBuilder:FormBuilder){}
    
    get foodName(){
      return this.addMenuItem.get('foodName')
    }

    get foodCategory(){
      return this.addMenuItem.get('foodCategory')
    }

    get foodImage(){
      return this.addMenuItem.get('foodImage')
    }

    get foodDesc(){
      return this.addMenuItem.get('foodDesc')
    }
    get foodPrice(){
      return this.addMenuItem.get('foodPrice')
    }
    
}
