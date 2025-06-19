import { Component, contentChild,ElementRef,enableProdMode,EventEmitter,Input,Output} from '@angular/core';

@Component({
  selector: 'app-assignchild',
  standalone: false,
  templateUrl: './assignchild.component.html',
  styleUrl: './assignchild.component.css'
})
export class AssignchildComponent {
   
    @Input() num:number=0;
    @Output() 
     myevent:EventEmitter<number> = new EventEmitter<number>;
     increment(){
      //code to run the event
      this.num=this.num+1
      this.myevent.emit(this.num)
     };
      @Input() ename:string="";
      @Input() eid:string="";
      @Input() ecompany:string="";

    
}
//  @Output()
    //  myeven:EventEmitter<string> = new EventEmitter<string>;
    //  myeven.emit(`${ename}+"\n"+${eid}+"\n"+${ecompany}`)
