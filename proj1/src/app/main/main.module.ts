import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Header2Component } from './header2/header2.component';
import { Footer2Component } from './footer2/footer2.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';

@NgModule({
  declarations: [Header2Component, Footer2Component, Sidebar2Component],
  imports: [CommonModule],
  exports: [
    Header2Component,
    Footer2Component,
    Sidebar2Component,
    Header2Component,
  ],
})
export class MainModule {}
