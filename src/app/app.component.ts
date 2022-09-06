import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private formBuilder:FormBuilder) { 
  }
  title = 'getdata';  
  submitted=false;
  hide=true;


  loginForm =this.formBuilder.group({

    password:['',[Validators.required,Validators.minLength(10)]],
    email:['',[Validators.required,Validators.email]],

  });

  get email()
  {
    return this.loginForm.get("email");
  }

  get password()
  {
    return this.loginForm.get("password");
  }

  onSubmit()
  {
    this.submitted=true;
    console.log(this.loginForm.value);
  }

}