import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-form-food',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, FormControl, FormGroup],
  templateUrl: './form-food.component.html',
  styleUrl: './form-food.component.scss'
})
export class FormFoodComponent{
 
    addMenuItem= new FormGroup({
      foodName: new FormControl(''),
      foodCategory: new FormControl(''),
      foodPrice: new FormControl(''),
      foodDesc: new FormControl(''),
      foodImage: new FormControl('')
    })
}
