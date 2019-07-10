import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormArray,
  Validators
} from "@angular/forms";

import { InventoryValidator } from "./inventory.validator";

import { Product } from "./models/product.interface";

@Component({
  selector: "app-inventory",
  templateUrl: "./inventory.component.html",
  styleUrls: ["./inventory.component.scss"]
})
export class InventoryComponent implements OnInit {
  public inventoryForm: FormGroup;

  public products: Product[] = [
    { id: 1, price: 1599, name: "Macbook Pro" },
    { id: 2, price: 1299, name: "Macbook Air" },
    { id: 3, price: 1099, name: "iPhone X" },
    { id: 4, price: 799, name: "iPhone 8" },
    { id: 5, price: 399, name: "Apple watch" }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.inventoryForm = this.fb.group({
      store: this.fb.group({
        branch: ["", [Validators.required, InventoryValidator.checkBranch]],
        code: ["", Validators.required]
      }),
      selector: this.createStock({}),
      stock: this.fb.array([
        this.createStock({ productId: "3", quantity: 50 }),
        this.createStock({ productId: "4", quantity: 10 })
      ])
      /*
        Simple way to create FormGroup as below
      */
      // this.inventoryForm = new FormGroup({
      //   store: new FormGroup({
      //     branch: new FormControl("A123"),
      //     code: new FormControl("1234")
      //   }),
      // selector: new FormGroup({
      //   productId: new FormControl(""),
      //   quantity: new FormControl(10)
      // }),
      /* Implementation without Frombuilder */
      /* stock: new FormArray([
        this.createStock({ productId: "3", quantity: 50 }),
        this.createStock({ productId: "4", quantity: 10 })
      ]) */
      /*
          You can add formGroup as below too.
         */
      // stock: new FormArray([
      // new FormGroup({
      //   productId: new FormControl("iPhone X"),
      //   quantity: new FormControl(10)
      // })
      // ])
    });
  }

  /*
    Implementation without FormBuilder 
    Special Wrapper that allows us to reduce boiler plate of new type(FormGroup, FormArray, FormControl)
  */
  // createStock(stock) {
  //   return new FormGroup({
  //     productId: new FormControl(parseInt(stock.productId, 10) || ""),
  //     quantity: new FormControl(stock.quantity || 10)
  //   });
  // }

  createStock(stock) {
    return this.fb.group({
      productId: parseInt(stock.productId, 10) || "",
      quantity: stock.quantity || 10
    });
  }

  addStock(stock) {
    const stockControl = this.inventoryForm.get("stock") as FormArray;
    stockControl.push(this.createStock(stock));
  }

  removeStock({ item, index }: { item: FormGroup; index: number }) {
    const stockControl = this.inventoryForm.get("stock") as FormArray;
    stockControl.removeAt(index);
  }

  onSubmit() {
    console.log(this.inventoryForm);
  }
}
