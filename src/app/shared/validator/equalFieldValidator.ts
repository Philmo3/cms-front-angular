import { AbstractControl, ValidationErrors } from "@angular/forms";

export class EqualFieldValidator{
  static validator(fielNameToEqual: string){
    return (control: AbstractControl) : ValidationErrors => {
      const fieldToEqual = control.parent?.get(fielNameToEqual);

      return fieldToEqual && fieldToEqual.value === control.value ? { valid: true } : { valid: false }
    }
  }
}
