import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modle';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[] =[
    new Ingredient("Apple", 6),
    new Ingredient("Tomato", 5)

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
