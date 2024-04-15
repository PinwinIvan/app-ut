import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Food } from '../shared/food.model';
import { FoodService } from '../shared/food.service';

@Component({
  selector: 'app-food-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './food-details.component.html',
  styleUrl: './food-details.component.scss'
})
export class FoodDetailsComponent implements OnInit {
  constructor(public foodService: FoodService) { }

  route: ActivatedRoute = inject(ActivatedRoute);

  foodId: number = -1;
  food?: Food = {
    id: 0,
    name: '',
    description: '',
    category: '',
    image: '',
    price: 0
  }

  ngOnInit(): void {
    this.foodId = Number(this.route.snapshot.params['id']);
    this.foodService.getAnArticle(this.foodId).subscribe({
      next: (value) => (this.food = value),
      error: (err) => console.error(err),
      complete: () => console.info('complete'),
    })
  }
}
