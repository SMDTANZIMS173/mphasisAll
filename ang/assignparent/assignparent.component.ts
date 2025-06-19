import { Component } from '@angular/core';

@Component({
  selector: 'app-assignparent',
  standalone: false,
  templateUrl: './assignparent.component.html',
  styleUrl: './assignparent.component.css'
})
export class AssignparentComponent {
   a:number=0;
   show(newNum:number){
    this.a = newNum;
   }
  
    ename:string= ""
    eid:string= ""
    ecompany:string= ""
    showdet(ename:string,eid:string,ecompany:string){
      this.ename = ename,
      this.eid=eid
      this.ecompany=ecompany
    }
   
}
// ename:string= (document.getElementById("p1") as HTMLInputElement).value
// eid:string= (document.getElementById("p2") as HTMLInputElement).value
// ecompany:string= (document.getElementById("p3") as HTMLInputElement).value
