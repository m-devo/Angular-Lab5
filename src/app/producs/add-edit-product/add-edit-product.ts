  import { Component, Inject, OnInit, ViewChild } from '@angular/core';
  import { NgForm } from '@angular/forms';
  import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

  @Component({
    selector: 'app-add-edit-product',
    standalone: false,
    templateUrl: './add-edit-product.html',
    styleUrl: './add-edit-product.css'
  })

  export class AddEditProduct implements OnInit {

  product: any = { image: "", name: "", price: 0, description: "" };

  constructor(
    public dialogRef: MatDialogRef<AddEditProduct>,
    @Inject(MAT_DIALOG_DATA) public data?: any
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this.product = { ...this.data };
    }
  }

}
