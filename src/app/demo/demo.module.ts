import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderLeftComponent } from './header-left/header-left.component';
import { HeaderRightComponent } from './header-right/header-right.component';
import { MessagesDropdownMenuComponent } from './messages-dropdown-menu/messages-dropdown-menu.component';
import { NotificationsDropdownMenuComponent } from './notifications-dropdown-menu/notifications-dropdown-menu.component';
import { BrandLogoComponent } from './brand-logo/brand-logo.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '../layout/layout.module';

const DECLARATIONS_AND_EXPORTS = [
  HeaderLeftComponent,
  HeaderRightComponent,
  MessagesDropdownMenuComponent,
  NotificationsDropdownMenuComponent,
  BrandLogoComponent,
  HomeComponent,
];

@NgModule({
  imports: [CommonModule, SharedModule, LayoutModule],
  declarations: [...DECLARATIONS_AND_EXPORTS],
  exports: [...DECLARATIONS_AND_EXPORTS],
})
export class DemoModule {}
