import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzadetService {

  constructor(public h:HttpClient) { }
  //from pizzas
  getpizzadet(){
    return this.h.get<ipizza[]>("http://localhost:3000/pizzas")
  }
  postreg(userData:any):Observable<any>{
    return this.h.post("http://localhost:3000/registrations",userData)
  }
  getreg():Observable<any[]>{
    return this.h.get<any[]>("http://localhost:3000/registrations")
  }
  postpiz(pizza:any):Observable<any>{
    return this.h.post("http://localhost:3000/cart",pizza)

  }
  // Search pizzas by toppings
  // searchPizzaByToppings(topping: string): Observable<ipizza[]> {
  //   return this.h.get<ipizza[]>("http://localhost:3000/pizzas");
  // }
  searchPizzaByToppings(toppings: string): Observable<ipizza[]> {
    return this.h.get<ipizza[]>(`http://localhost:3000/pizzas?toppings_like=${toppings}`);
  }
  
  //from cart
  getpizz(){
    return this.h.get<ipizza[]>("http://localhost:3000/cart")
  }
}
export interface ipizza{
  id:number;
  toppings:string;
  sauce:string;
  size:string;
  Features:string;
  price:number;
  image:string
}
