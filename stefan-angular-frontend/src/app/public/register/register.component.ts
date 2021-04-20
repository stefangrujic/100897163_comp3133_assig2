import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(loginForm: NgForm):void{
    let userName = loginForm.value.username
    let password = loginForm.value.password
    let email = loginForm.value.email

    console.log(` Username: ${userName}  Password: ${password} Email: ${email}`)
   }

}
