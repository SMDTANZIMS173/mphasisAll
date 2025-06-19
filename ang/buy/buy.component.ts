import { Component, Injector,ElementRef,ViewChild } from '@angular/core';
import { ButtonupdateService } from '../buttonupdate.service';
import { GreetingServiceService } from '../greeting-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buy',
  standalone: false,
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css'
})
export class BuyComponent {
  q:number=0;
  pid:string="";
  pname:string="";
  price:number=0;
  description:string="";
  image:string="";
    // result=0;
    // res="";
    // col="Hover me to change color"
    // ob!:ButtonupdateService
    // ob1!:GreetingServiceService
    // constructor(i:Injector){
    //   this.ob = i.get(ButtonupdateService);
    //   this.result=this.ob.num;
    //   this.ob1 = i.get(GreetingServiceService);
    //   this.res = this.ob1.greet("tanzim")
    //   // this.col = this.ob1.changecolor()
    //  }
    //  incre(){
    //   this.result = this.ob.buttonupdate();
    //  }
    //  @ViewChild("h1") element!:ElementRef
    //  hoverme():void{
    //   this.ob1.changecolor(this.element.nativeElement)
    //  }
    //  hoverout():void{
    //   this.ob1.changecolor1(this.element.nativeElement)
    //  }
    
    constructor(public ob:ActivatedRoute){
      
       ob.queryParams.subscribe(data =>{
        this.pid = data["a"];
        this.pname = data["b"];
        this.price = data["c"];
        this.description = data["d"];
        this.image = data["e"];
       })
    }

     
}
   
    