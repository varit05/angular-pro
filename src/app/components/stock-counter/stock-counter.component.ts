import { Component, OnInit, Input, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

const COUNTER_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useFactory: forwardRef(() => StockCounterComponent),
  multi: true
};

@Component({
  selector: "app-stock-counter",
  providers: [COUNTER_CONTROL_ACCESSOR],
  templateUrl: "./stock-counter.component.html",
  styleUrls: ["./stock-counter.component.scss"]
})
export class StockCounterComponent implements OnInit, ControlValueAccessor {
  @Input() step: number = 10;
  @Input() min: number = 10;
  @Input() max: number = 1000;

  private onTouch: Function;
  private onModelChange: Function;

  // NG_VALUE_ACCESSOR FUNCTIONS AND METHODS
  registerOnTouched(fn) {
    this.onTouch = fn;
  }

  registerOnChange(fn) {
    this.onModelChange = fn;
  }

  writeValue(value) {
    this.value = value || 0;
  }

  value: number = 10;
  constructor() {}

  ngOnInit() {}

  increment() {
    if (this.value < this.max) {
      this.value = this.value + this.step;
      this.onModelChange(this.value);
    }
    this.onTouch();
  }

  decrement() {
    if (this.value > this.min) {
      this.value = this.value - this.step;
      this.onModelChange(this.value);
    }
    this.onTouch();
  }
}
