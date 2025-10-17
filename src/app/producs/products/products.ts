import { Component, OnInit } from '@angular/core';
import { Productservice } from '../products-service/productservice';
import { AddEditProduct } from '../add-edit-product/add-edit-product';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {

displayedColumns: string[] = ['id', 'name', 'price', 'image', 'description', 'actions'];
  productsList: any = [];

  constructor(public productService: Productservice, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.GetAllProducts().subscribe((Response) => {
      this.productsList = Response;
      // console.log(this.productsList);
    });
  }

 deleteProduct(productId: string) {
    this.productService.deleteProduct(productId).subscribe(() => {
      this.getAllProducts();

    });
  }

editProduct(product: any) {

  let dialogRef = this.dialog.open(AddEditProduct, {
      width: "80%",
      height: "auto",
      data: product
    });

    dialogRef.afterClosed().subscribe(response => {
      // console.log(response)
      if (response) {
        this.productService.editProduct(product.id, response).subscribe(() => {
          this.getAllProducts();
        });
      }
    });
  }

  addProduct() {
    let dialogRef = this.dialog.open(AddEditProduct, { width: "80%", height: "auto" });

    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        this.productService.addProduct(response).subscribe(() => {
          this.getAllProducts();
        });
      }
    });
  }
}
