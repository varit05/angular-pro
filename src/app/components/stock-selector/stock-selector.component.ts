import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { Product } from "../../inventory/models/product.interface";

@Component({
  selector: "app-stock-selector",
  templateUrl: "./stock-selector.component.html",
  styleUrls: ["./stock-selector.component.scss"]
})
export class StockSelectorComponent implements OnInit {
  @Input() parent: FormGroup;
  constructor() {}

  @Input() products: Product;

  @Output() added = new EventEmitter<any>();

  onAdd() {
    this.added.emit(this.parent.get("selector").value);

    /*
     Reset Form with all the values including angular built in checks 
     i.e dirty, pristine, touched, valid etc... 
     */
    this.parent.get("selector").reset({
      productId: "",
      quantity: 10
    });

    /*
     SetValue set all the value of the form.
     If not given, throws an error in console. 
     Useful when all the values needs to be reset for the form as 
     angular provides built in check that all the forms values are being set/reset
    */
    // this.parent.get("stock").setValue({
    //   productId: "",
    //   quantity: 10
    // });

    /*
     PatchValue reset the perticular value of the form. 
     Useful when perticular value of the form needs to be set/reset 
    */
    // this.parent.get("stock").patchValue({
    //   productId: ""
    // });
  }

  ngOnInit() {}
}
