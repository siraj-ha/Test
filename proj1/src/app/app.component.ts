import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'proj1';
  test: boolean = true;
  moy: number = 5;
  color: string = 'red';
  color2: string = 'green';
  list = [
    { name: 'salem', age: 28 },
    { name: 'ahmed', age: 30 },
    { name: 'omar', age: 16 },
  ];
  inputValue: String = '';
  classBg = 'bgClass';
  isSpecial = true;
  canSave = false;
  st = { background: 'red' };
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['name', [Validators.required]],
      age: ['', Validators.required, Validators.min(0)],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  setStyle() {
    let style = { background: 'green', 'font-size': '50px ', color: 'white' };
    return style;
  }

  setClass() {
    return {
      special: this.isSpecial,
      saveable: this.canSave,
    };
  }
  changeValue() {
    console.log('value', this.inputValue);
  }
}
