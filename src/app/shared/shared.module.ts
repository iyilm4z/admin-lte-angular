import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlSidebarComponent } from './components/control-sidebar/control-sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterLeftComponent } from './components/footer-left/footer-left.component';
import { FooterRightComponent } from './components/footer-right/footer-right.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderLeftComponent } from './components/header-left/header-left.component';
import { HeaderMessagesMenuComponent } from './components/header-messages-menu/header-messages-menu.component';
import { HeaderNotificationsMenuComponent } from './components/header-notifications-menu/header-notifications-menu.component';
import { HeaderRightComponent } from './components/header-right/header-right.component';
import { HeaderSearchFormComponent } from './components/header-search-form/header-search-form.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarBrandComponent } from './components/sidebar-brand/sidebar-brand.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { SidebarUserPanelComponent } from './components/sidebar-user-panel/sidebar-user-panel.component';

var LTE_COMPONENTS = [
  ControlSidebarComponent,
  FooterComponent,
  FooterLeftComponent,
  FooterRightComponent,
  HeaderComponent,
  HeaderLeftComponent,
  HeaderMessagesMenuComponent,
  HeaderNotificationsMenuComponent,
  HeaderRightComponent,
  HeaderSearchFormComponent,
  SidebarComponent,
  SidebarBrandComponent,
  SidebarMenuComponent,
  SidebarUserPanelComponent,
];

@NgModule({
  imports: [CommonModule],
  declarations: [...LTE_COMPONENTS],
  exports: [...LTE_COMPONENTS],
})
export class SharedModule {}
