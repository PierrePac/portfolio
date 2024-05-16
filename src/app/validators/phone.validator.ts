import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function phoneValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (!control.value) {
            return null;
          }
        const phoneRegex = /^0[1-9][0-9]{8}$/;
        const valid = phoneRegex.test(control.value);
        return valid ? null : { invalidPhone: true };
    }
}