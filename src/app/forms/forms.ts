import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css'
})
export class Forms {
  myForm!:FormGroup;

  constructor(){
    this.myForm = new FormGroup({
      username: new FormControl('' , [
        Validators.required,
        Validators.minLength(3)
      ])
    })
  }

  onSubmit(){
    if(this.myForm.valid){
      console.log("Form submitted" , this.myForm.value);
    }
    else {
      console.log("Form is invalid")
    }
  }
}
