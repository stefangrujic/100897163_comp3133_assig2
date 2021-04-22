import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:any;

  constructor(private router: Router,private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(({data}) =>{
      this.user = data.getUser;
    })
  }

  onSubmit(loginForm: NgForm):void{
    let userName = loginForm.value.username
    let password = loginForm.value.password
    let email = loginForm.value.email

    this.userService.addUser(userName,password,email).subscribe(
      ({ data }) => {
        alert("User Saved!")
      },
      error => {
        console.log("there was an error sending the query", error);
      }
    );
    console.log(` Username: ${userName}  Password: ${password} Email: ${email}`)
   }

}
