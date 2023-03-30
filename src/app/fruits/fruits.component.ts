import { Component } from '@angular/core';
import { FRUITS } from '../fruits-list';
import { Fruit } from '../fruit';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent {
  fruits = FRUITS;
  selectedFruit?: Fruit;

  onSelect(fruit: Fruit): void {
    this.selectedFruit = fruit;
  }
}
