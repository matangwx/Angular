import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, AbstractControl, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-validatingform',
  templateUrl: './validatingform.component.html',
  styleUrls: ['./validatingform.component.css']
})
export class ValidatingformComponent implements OnInit {

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      optionA: new FormControl(false),
      optionB: new FormControl(false),
      optionBExtra: new FormControl({ disabled: true, value: '' }, [Validators.required, Validators.minLength(5)])
    });

    this.optionB.valueChanges.subscribe(checked => {
      checked ? this.optionBExtra.enable() : this.optionBExtra.disable();
    });
  }

  get optionB() {
    return this.form.get('optionB') as FormControl;
  }

  get optionBExtra() {
    return this.form.get('optionBExtra') as FormControl;
  }
}
