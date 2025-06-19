import { Component } from '@angular/core';
import { PizzadetService } from '../pizzadet.service';
import { Observable } from 'rxjs';
import { ipizza } from '../pizzadet.service';

@Component({
  selector: 'app-view',
  standalone: false,
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  pizzaarray: ipizza[] = [];
  filteredPizzas: ipizza[] = [];
  searchText: string = '';

  constructor(public obj: PizzadetService) {
    obj.getpizzadet().subscribe(result => {
      console.log(result);
      this.pizzaarray = result;
      this.filteredPizzas = result; // Initially show all
    });
  }

  getitem(pizza: ipizza) {
    this.obj.getpizz().subscribe((cart: ipizza[]) => {
      const alreadyAdded = cart.some(item => item.id === pizza.id);

      if (alreadyAdded) {
        alert(`Pizza (ID: ${pizza.id}) is already in the cart.`);
      } else {
        this.obj.postpiz(pizza).subscribe(() => {
          alert(`Pizza ${pizza.id} added to cart successfully!`);
        });
      }
    });
  }

  // 👉 Add this simple search function
  searchPizza() {
    if (this.searchText.trim() === '') {
      this.filteredPizzas = this.pizzaarray; // If search is empty, show all
    } else {
      this.filteredPizzas = this.pizzaarray.filter(pizza =>
        pizza.toppings.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }
}

