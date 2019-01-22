import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ValidateUrl } from './url.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  myForm: FormGroup;
  jsonString: string;
  items: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      items: this.fb.array([this.createItem()]),
    });
    this.onChanges();
  }

  onChanges(): void {
    this.myForm.valueChanges.subscribe(val => {
      this.jsonString = this.myForm.value;
    });

  }

  createItem(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      websiteUrl: ['', [Validators.required, ValidateUrl]]
    });
  }


  addItem(): void {
    this.items = this.myForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

}
