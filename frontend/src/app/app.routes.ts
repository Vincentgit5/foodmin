import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import path from 'path';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    // search = nom de la route, :/searchTerm = paramettre de l'URL, component:HomeComponent = lieu ou la route sera exe
    {path: 'search/:searchTerm', component:HomeComponent},
    {path: 'tag/:tag', component:HomeComponent},
    {path: 'food/:id', component:FoodPageComponent}, // redirection vers la page food-page.component.ts
    {path: 'cart-page', component:CartPageComponent} // redirection vers la page d'accueil si la route n'existe pas
];
