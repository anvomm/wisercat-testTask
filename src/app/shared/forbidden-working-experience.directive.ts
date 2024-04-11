import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function forbiddenWorkingExperience(
  numbersAfterComma: number
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = 
      typeof control.value !== 'number'  ||
      control.value.toString().split('.')[1]?.length > numbersAfterComma;
    return forbidden ? { forbiddenExperience: { value: control.value } } : null;
  };
}
