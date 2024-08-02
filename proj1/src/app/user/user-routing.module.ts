import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';

const routes: Routes = [
  {
    path: 'list_user',
    component: UserComponent,
  },
  { path: 'delete_user', component: DeleteUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
