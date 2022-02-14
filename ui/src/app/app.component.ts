import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AddNumberService } from './service/add-number/add-number.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  addNumberForm: FormGroup;
  result: number;

  constructor(
    private numberService: AddNumberService,
    private formBuilder: FormBuilder,
  ) {
    this.createForm();
  }

  createForm() {
    this.addNumberForm = this.formBuilder.group({
      firstNumber: new FormControl(null, [Validators.required, Validators.min(1)]),
      secondNumber: new FormControl(null, [Validators.required, Validators.min(1)]),
    });  
  }

  onSubmit() {
    console.log(this.addNumberForm);

    if (this.addNumberForm.invalid) {
      this.addNumberForm.markAsDirty()
      return
    }
    this.addNumbers()
    
  }

  addNumbers(): void {
    this.numberService.addTwoNumbersService(this.addNumberForm.value).subscribe((data) => {
      console.log(data);
      
      this.result = data
    }, (err) => {
      console.log(err);
    });
  }
}
