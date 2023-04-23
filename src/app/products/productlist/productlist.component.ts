import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationService } from 'src/app/services/notification.service';
import { ProductService } from 'src/app/services/product.service';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { ProductsComponent } from '../products.component';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})

export class ProductlistComponent implements OnInit {
  constructor(private _service:ProductService,public _notification:NotificationService
    ,public _dialog:MatDialog){
      this._service.listen().subscribe((m:any)=>
      {
        this.fillGrid();
      }
      )
    }


  gridListData:MatTableDataSource<any>=new MatTableDataSource(); 
 displayedColumns:string[]=['prodname','price','desc','actions'];
 @ViewChild(MatSort) sort:MatSort=new MatSort();
 @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  searchKey:string="";
  id:string=""
 
ngOnInit()
{
  this.fillGrid();

}
fillGrid()
{

  this._service.getAllProduct()
  .subscribe(data=>
    {
      this.gridListData=new MatTableDataSource(data);
      this.gridListData.sort=this.sort;
      this.gridListData.paginator=this.paginator;
    })
}
applyFilter()
{
  this.gridListData.filter=this.searchKey.trim().toLowerCase();
}
onSearchClear()
{

  this.searchKey="";
  this.applyFilter();
}
onEdit(row:any)
{
  
  this._service.populateForm(row);
  const dialogConfig=new MatDialogConfig();
  dialogConfig.disableClose=true;
  dialogConfig.autoFocus=true;
  dialogConfig.width="30%";
  this._dialog.open(ProductsComponent,dialogConfig);
this._notification.success("You Clicked Edit");
}
onDelete(prodid:any)
{

  this._service.delProduct(prodid).subscribe(
    data=>{
      this._notification.warn("Deleted Successfully");
      this._service.filter('');

    }
  )
  this._notification.warn("You Clicked Delete");
  }
  onCreate()
  {
   
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="30%";
    this._dialog.open(ProductsComponent,dialogConfig);

  }

}
