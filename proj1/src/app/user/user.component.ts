import { Component } from '@angular/core';
import { id } from '@cds/core/internal';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  users = [
    { name: 'salem', id: 1, color: 'white' },
    { name: 'ahmed', id: 2, color: 'green' },
    { name: 'omar', id: 3, color: 'red' },
  ];
  iduser: any;
  show: boolean = false;
  msg: string = '';
  onDelete(id: any) {
    this.iduser = id;
    this.show = true;
    console.log('id', id);
  }
  cancelAction() {
    this.show = false;
  }
  /**saveAction() {
    this.show = false;
    console.log('deleted user id:', this.iduser);
  }**/
}
