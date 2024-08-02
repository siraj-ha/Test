import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css'],
})
export class DeleteUserComponent {
  @Input('userId')
  userId: any;
  @Output() close = new EventEmitter();
  @Output() save = new EventEmitter();
  closeAction() {
    this.close.emit(true);
  }
  Onsave() {
    this.save.emit('ttrue');
    this.close.emit(true);
  }
}
