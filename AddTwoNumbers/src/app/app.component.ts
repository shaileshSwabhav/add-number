import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { NumbersService } from './addTwoNum.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AddTwoNumbers';
  addTwoNum!: FormGroup;
  result: any;

  createForm() {
    this.addTwoNum = new FormGroup ({
      num1: new FormControl(),
      num2: new FormControl(),
    });  
  }

  constructor(private numbersService: NumbersService) {
    this.createForm();
  }

  onSubmit() {
    console.log(this.addTwoNum);
    this.numbersService.addTwoNumbersService(this.addTwoNum)
      .subscribe( data => {
        this.result = data
      },
      err => {
        console.log(err);
      });
  }

}
