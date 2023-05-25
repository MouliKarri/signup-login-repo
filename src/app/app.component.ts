/*import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  register!: FormGroup;

  this.register= new FormGroup({
    fullname: new FormControl(),
    username: new FormControl(),
    Email: new FormControl(),
    password: new FormControl(),
    Number: new FormControl(),
    male: new FormControl(),
    female: new FormControl(),
    other: new FormControl(),
    Birthday: new FormControl(),
  });
  
  constructor (private router: Router,private http : HttpClient) {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  register1(){let register= {username: this.username(),
    Email:this.Email(),}};
  this.http.post("http://localhost:8080/login",register).subscribe;((resultData:any)=>{console.log(resultData);})

  const login = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  })
  show(){
    console.log(this.register.value,this.login.value)
  }
}*/
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  
  register!: FormGroup;
  login! : FormGroup;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.register = new FormGroup({
      fullname: new FormControl(),
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      number: new FormControl(),
      male: new FormControl(),
      female: new FormControl(),
      other: new FormControl(),
      Birthday: new FormControl(),
    });

    this.login = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  register1() {
    const registerData = {
      name: this.register.get('name')?.value,
      email: this.register.get('email')?.value,
      password:this.register.get('password')?.value,
      fullname:this.register.get('fullname')?.value,
      number:this.register.get('number')?.value
    };

    this.http.post("http://localhost:8080/signup", registerData).subscribe(
      (resultData: any) => {
        console.log(resultData);
      },
    ) 
  }
  login1() {
    const registeredData = {
      email: this.login.get('email')?.value,
      password: this.login.get('password')?.value
    };

    this.http.post("http://localhost:8080/login", registeredData).subscribe(
      (resuledtData: any) => {
        console.log(resuledtData);
      },
    )
  }    
} 
