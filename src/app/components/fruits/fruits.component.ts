import { Component } from '@angular/core';
import { Fruit } from './models/fruit';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent {
  fruits: Fruit[] = [
    { id: 1, name: 'Banana' },
    { id: 2, name: 'Grapes' },
    { id: 3, name: 'Apple' },
    { id: 4, name: 'Orange' },
    { id: 5, name: 'Coconut' },
    { id: 6, name: 'Strawberry' },
    { id: 7, name: 'Blackberry' },
    { id: 8, name: 'Pineapple' },
    { id: 9, name: 'Watermelon' },
    { id: 10, name: 'Cherry' },
  ];
  selectedFruit?: Fruit;

  onSelect(fruit: Fruit): void {
    this.selectedFruit = fruit;
  }
}
