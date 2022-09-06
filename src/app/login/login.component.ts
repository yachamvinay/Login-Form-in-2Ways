import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  contact:contact={
    email:"vinay.y@gmail.com",
    password:"123456789"
  }

  onSubmit(contactForm:any)
  {
    console.log(contactForm.value);
    
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
export class contact{
  email!: string;
  password!: string;
  }
