import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Paneer Butter", "This dish would be made with a few large slabs",
    "https://assets.epicurious.com/photos/5df7c9efa9f50600094dffed/6:4/w_274%2Ch_169/COOK90_ButterPaneer_RECIPE_V2_121119_288.jpg"),
    new Recipe("Paneer Butter", "This dish would be made with a few large slabs",
    "https://assets.epicurious.com/photos/5df7c9efa9f50600094dffed/6:4/w_274%2Ch_169/COOK90_ButterPaneer_RECIPE_V2_121119_288.jpg")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
