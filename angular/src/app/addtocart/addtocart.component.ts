import { Component } from '@angular/core';
import { PizzadetService } from '../pizzadet.service';
@Component({
  selector: 'app-addtocart',
  standalone: false,
  templateUrl: './addtocart.component.html',
  styleUrl: './addtocart.component.css'
})
export class AddtocartComponent {
 cartItem:any[]=[];
 totalBill: number = 0;
//  orderDetails:string = "";

 constructor(public obj:PizzadetService){
  obj.getpizz().subscribe((result=>this.cartItem=result)) 
 }
 confirmbuy(){
  this.totalBill = 0;
  let orderDetails = "Your Order Summary:\n";
    this.cartItem.forEach(pizza => {
      // if(this.q){}
      
      if(pizza.q && pizza.q>0){
        const itemTotal = pizza.price * pizza.q;
        this.totalBill += itemTotal;
        //i will take a variable
        orderDetails+=
        `Pizza ID: ${pizza.id}\n` +
          `Toppings: ${pizza.toppings}\n` +
          `Sauce: ${pizza.sauce}\n` +
          `Size: ${pizza.size}\n` +
          `Features: ${pizza.Features}\n` +
          `Price per Pizza: ₹${pizza.price}\n` +
          `Quantity: ${pizza.q}\n` +
          `Total: ₹${itemTotal}\n\n`;
          `<hr>`
      } 
      // else{
      //   orderDetails += `Pizza ID: ${pizza.pid} - Please enter a valid quantity.\n\n`;
      // }
    });
    orderDetails+=`Total Bill ${this.totalBill}`
    alert(orderDetails);
    console.log(orderDetails);
 }
}
