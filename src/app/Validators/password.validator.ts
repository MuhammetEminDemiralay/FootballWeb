import { FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidator {

    static passwordValidator(control: FormControl): ValidationErrors | null {
        // console.log(control);
        return null
    }
}