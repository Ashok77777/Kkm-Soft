import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ProductModel } from '../models/product.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL: string = 'https://crudcrud.com/api/c17e72d7ef784a4b87671806418f7028/product/';
  user_URL: string = 'https://crudcrud.com/api/c17e72d7ef784a4b87671806418f7028/Users';
 
  
  constructor(private _http: HttpClient) { }
  loginForm:FormGroup = new FormGroup(
    {
   
      email: new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null,Validators.required),
 
    }

  );
  form: FormGroup = new FormGroup(
    {
      _id: new FormControl(''),
      prodname: new FormControl('',Validators.required),
      price: new FormControl('',Validators.required),
      desc: new FormControl(''),
    


    }

  );

  intializeFormGroup() {
    this.form.setValue({
      _id: '',
      prodname: '',
      price: 0,
      desc: ''
   
    });
    this.loginForm.setValue({
      email: '',
      password: ''

    });


  }
  populateForm(product:any)
  {
  
this.form.setValue(product);
  }


  private _listeners=new Subject<any>();
  listen(): Observable<any>
  {
    return this._listeners.asObservable()
  }
  filter(filterby:any)
  {
    return this._listeners.next(filterby)
  }

  getAllProduct(): Observable<any> {
    return this._http.get(this.API_URL)

  }
  getAllUser(): Observable<any> {
    return this._http.get(this.user_URL)

  }
  updProduct(id:string,product: ProductModel): Observable<any> {
  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.put(this.API_URL + id,product, httpOptions);
  }
  insProduct(product: ProductModel): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post(this.API_URL,product, httpOptions);
  }
  delProduct(id: string): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.delete(this.API_URL + id, httpOptions);
  }


}
