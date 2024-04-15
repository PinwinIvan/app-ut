import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Food } from '../shared/food.model';
import { FoodService } from '../shared/food.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { RouterModule } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, TitleCasePipe, CurrencyPipe, RouterModule, MatIcon],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss'
})

export class FoodComponent {
  
  @Input() food?: Food;
  @Output() eventDeleteFood = new EventEmitter<boolean>;

  constructor(public serviceFood: FoodService, public dialog: MatDialog) {
  }


  openDialog(deleteFood: Food) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: deleteFood
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result == true) {
        this.deleteArticle(deleteFood)
      }

    });
  }

  public deleteArticle(food: Food) {
    this.serviceFood.delAnArticle(food).subscribe({
      next: () => console.log('Se esta eliminando'),
      error: (e) => console.error(e),
      complete: () => this.deleteFoodEvent(true),
    })
  }

  public deleteFoodEvent(value: boolean):void{
    this.eventDeleteFood.emit(value)
  }
}
