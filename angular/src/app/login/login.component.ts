import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PizzadetService } from '../pizzadet.service';
import { Router } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  f:any;
  constructor(public obj:PizzadetService, public r: Router,public themeService:ThemeService){
    this.f = new FormGroup({
      uname:new FormControl("",[Validators.required]),
      email:new FormControl("",[Validators.required,Validators.email,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]),
      pass:new FormControl("",[Validators.required,Validators.maxLength(10)])
    })
  //     obj.getreg().subscribe(result:any[])=>{
  //       if(result.uname==this.f.uname && result.email==this.f.email && result.pass==this.f.pass){
  //         alert(`Login Successful`);
  //         r.navigate('view')
  //       }

  //   }
  // )
}
// Change theme for Login page only
onThemeChange(event: Event): void {
  const selectedTheme = (event.target as HTMLSelectElement).value;

  // Apply theme to the entire Login page container
  if (selectedTheme === 'Light Theme') {
    this.themeService.toggleTheme('light', 'login-page');
  } else if (selectedTheme === 'Dark Theme') {
    this.themeService.toggleTheme('dark', 'login-page');
  }
}




validateLogin() {
  this.obj.getreg().subscribe((result: any[]) => {
    const user = result.find(
      u => u.uname === this.f.value.uname && u.email === this.f.value.email && u.pass === this.f.value.pass
    );

    if (user) {
      alert('Login Successful');
      sessionStorage.setItem("uname","f.value.uname")
      this.r.navigate(['view']); // Navigate to the "view" page
    } else {
      alert('Invalid credentials! if new user Register first');
      this.r.navigate(['register']);
    }
  });
}
}

