import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Food } from '../shared/food.model';
import { FoodService } from '../shared/food.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [MatButtonModule,MatCardModule, TitleCasePipe, CurrencyPipe],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss'
})
export class FoodComponent {

  @Input() food?:Food;  

  constructor (public serviceFood:FoodService, public dialog:MatDialog){ 
  }


openDialog(deleteFood:Food) {
  const dialogRef = this.dialog.open(ConfirmDialogComponent,{
      data:deleteFood
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
      if (result == true) {
          this.serviceFood.deleteMenuItem(deleteFood);
      }

  });
}


}
