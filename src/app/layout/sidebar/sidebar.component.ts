import {
  Component,
  AfterContentInit,
  ContentChildren,
  QueryList,
  Input,
  TemplateRef,
  ContentChild,
} from '@angular/core';
import { LteTemplate } from 'src/app/shared/ltemplate.directive';
import { SidebarMenuComponent } from './sidebar-menu.component';

@Component({
  selector: 'lte-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements AfterContentInit {
  @ContentChildren(LteTemplate) templates: QueryList<LteTemplate>;
  @ContentChild(SidebarMenuComponent) menuComponent: SidebarMenuComponent;

  @Input() style: any;
  @Input() styleClass: string;

  brandLogoTemplate: TemplateRef<any>;
  rightTemplate: TemplateRef<any>;

  ngAfterContentInit(): void {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case 'brandLogo':
          this.brandLogoTemplate = item.template;
          break;
        case 'right':
          this.rightTemplate = item.template;
          break;
      }
    });
  }

  toggleSidebar(): void {}
}
