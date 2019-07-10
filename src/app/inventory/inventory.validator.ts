import { AbstractControl } from "@angular/forms";

// custom form validator class

export class InventoryValidator {
  static checkBranch(control: AbstractControl) {
    const regex = /^[a-z]\d{3}$/i;
    const isValid = regex.test(control.value);
    return isValid ? null : { invalidBranch: true };
  }
}
