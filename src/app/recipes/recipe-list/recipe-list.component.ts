import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  recipes: Recipe[] = [
    new Recipe('Baked Ziti',
      'Classic Italian American comfort food of pasta baked with sausage',
      'https://www.spendwithpennies.com/wp-content/uploads/2019/03/Baked-Ziti-SpendWithPennies-10.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
