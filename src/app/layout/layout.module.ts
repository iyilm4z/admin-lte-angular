import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { WrapperComponent } from './wrapper/wrapper.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarMenuComponent } from './sidebar/sidebar-menu.component';
import { RouterModule } from '@angular/router';

const DECLARATIONS_AND_EXPORTS = [
  WrapperComponent,
  ContentComponent,
  HeaderComponent,
  SidebarComponent,
  SidebarMenuComponent,
  FooterComponent,
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule],
  declarations: [...DECLARATIONS_AND_EXPORTS],
  exports: [...DECLARATIONS_AND_EXPORTS],
})
export class LayoutModule {}
