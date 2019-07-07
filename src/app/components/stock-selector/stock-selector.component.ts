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
  }

  ngOnInit() {}
}
