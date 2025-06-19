import { Component, ContentChild,ElementRef,ViewChild, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})

export class ChildComponent {
     //represents data comes form parent componenet in form of attribute
     @Input() message:string="";
     @Input() s:string="";
     @Output() 
     myevent:EventEmitter<string> = new EventEmitter<string>;
     executefunc(){
      //code to run the event
      this.myevent.emit('Angular Rocks!!')
     }
     @ContentChild("myid") st!:ElementRef
     changecontent(){
       this.st.nativeElement.style.background="green"
      }
      // @ViewChild("hi") hello!:ElementRef
      // changecolor1(){
      //   this.hello.nativeElement.style.background="violet";
      // }
}
