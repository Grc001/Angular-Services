import { Injectable } from '@angular/core';

export class Cocktail {
  constructor (
 public nom: string,
 public prix: number,
 public image: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }
  public cocktails = [
    { nom: 'Mojito', prix: 10, image: 'https://media1.giphy.com/media/d7bUCYaYMchtm/giphy.gif' },
    { nom: 'Margarita', prix: 12, image: 'https://cdn.shopify.com/s/files/1/0425/2699/8690/files/Refresh_Yourself_With_15_Spellbinding_Margarita_Gifs_480x480.gif?v=1652855640' },
    { nom: 'Cosmopolitan', prix: 15, image: 'https://i.pinimg.com/originals/99/bb/d6/99bbd66f37bf485f0df274bd7e045e7e.gif' }
  ];
  getCocktails(): Cocktail[] {
    return this.cocktails;
  }
}
