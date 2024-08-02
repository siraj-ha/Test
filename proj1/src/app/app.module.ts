import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { SidenavComponent } from './core/sidenav/sidenav.component';
import {
  FormsModule,
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { UserModule } from './user/user.module';
import { Header2Component } from './main/header2/header2.component';
import { Footer2Component } from './main/footer2/footer2.component';
import { Sidebar2Component } from './main/sidebar2/sidebar2.component';
import '@cds/core/icon/register.js';
import { ClarityIcons, cogIcon, userIcon } from '@cds/core/icon';

ClarityIcons.addIcons(userIcon, cogIcon);
@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    Header2Component,
    Footer2Component,
    Sidebar2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    UserModule,
    FormControl,
    Validators,
    FormGroup,
  ],
  entryComponents: [Header2Component, Footer2Component, Sidebar2Component],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
