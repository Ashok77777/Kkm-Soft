import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductModel } from '../models/product.model';
import { NotificationService } from '../services/notification.service';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(public _service:ProductService,public _dialogref:MatDialogRef<ProductsComponent>
    ,public _notification:NotificationService){}
  id:string= this._service.form.value["_id"];
  ngOnInit()
  {
    
  }

  onClose()
  {
   
this._dialogref.close();
this._service.form.reset();
this._service.intializeFormGroup();
this._service.filter('');

  }
  onClear()
  {
    this._service.form.reset();
    this._service.intializeFormGroup();

  }
  onSubmit()
  {
    var oprod =new ProductModel();
    oprod.prodname= this._service.form.value["prodname"];
    oprod.price= this._service.form.value["price"];
    oprod.desc= this._service.form.value["desc"];
    if(this.id==null || this.id=="" || this.id==undefined)
    {
   
      this._service.insProduct(oprod).subscribe(
        data=>{
         this._service.form.reset();
        this._service.intializeFormGroup();
        this._notification.success("::Inserted Successfully !!")
        this.onClose();
        }
      );

    }
    else
    {
    this._service.updProduct(this.id,oprod).subscribe(
    data=>{
    this._service.form.reset();
    this._service.intializeFormGroup();
    this._notification.success("::Updated Successfully !!")
    this.onClose();
    }
  );
  
  }

  }
}
