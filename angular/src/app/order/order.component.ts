import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: false,
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  q:number=0
  pid:number=0;
  toppings:string="";
  sauce:string="";
  size:string="";
  features:string="";
  price:number=0;
  image:string="";

    constructor(public ob:ActivatedRoute){
      ob.queryParams.subscribe(data=>{
        this.pid = data["a"];
        this.toppings = data["b"];
        this.sauce = data["c"];
        this.size = data["d"];
        this.features = data["e"];
        this.price = data["f"];
        this.image = data["g"];
      }
      )
    }
    confirmbuy(){
      if(this.q){
      alert(
        `Quantity :${this.q}\n
        PizzaId : ${this.pid}\n
        Toppings : ${this.toppings}\n
        Sauce : ${this.sauce}\n
        Size : ${this.size}\n
        Features :${this.features}\n
        Price :${this.price*this.q}`)
    }
    else{
      alert("Please enter the quantity")
    }
  }
}
