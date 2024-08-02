import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { DelComponent } from './del/del.component';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    DelComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FormModule { }
