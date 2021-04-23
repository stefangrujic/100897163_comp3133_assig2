import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stefan-angular-frontend';
  isValid = false;

  background: ThemePalette = 'primary';

  ngOnInit(): void {
    let val = localStorage.getItem('isValidUser')

    if(val != null && val == 'true'){
        this.isValid = true
    }else{
      this.isValid = false
    }
  }
}
