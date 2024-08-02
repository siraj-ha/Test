import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { ClarityModule } from '@clr/angular';
import { UserRoutingModule } from './user-routing.module';
@NgModule({
  declarations: [UserComponent, DeleteUserComponent],
  imports: [CommonModule, ClarityModule, UserRoutingModule],
  exports: [UserComponent, DeleteUserComponent],
})
export class UserModule {}
