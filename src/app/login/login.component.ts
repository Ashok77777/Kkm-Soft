import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { UserModel } from '../models/user.model';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(public _service:ProductService,public router:Router,
    public _notification:NotificationService){}

  ngOnInit()
  {

  }

  onSubmit()
  {
  
    var ouser=new UserModel();
    ouser.email= this._service.loginForm.value["email"];
    ouser.password= this._service.loginForm.value["password"];
    this._service.getAllUser().subscribe(
      data=>{
      
        if(data[0].email==ouser.email && data[0].password==ouser.password)
         {    
           this.router.navigate(['/product']);
         } 
          else 
          {
            this._service.loginForm.reset();
            this._service.intializeFormGroup();
            this._notification.success("Please enter Valid Credentials");

          }
  }
    );

  }

}
