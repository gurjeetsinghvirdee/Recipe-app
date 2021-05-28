import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Mycomponents/header/header.component';
import { RecipesComponent } from './Mycomponents/recipes/recipes.component';
import { RecipeListComponent } from './Mycomponents/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './Mycomponents/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './Mycomponents/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './Mycomponents/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './Mycomponents/shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
