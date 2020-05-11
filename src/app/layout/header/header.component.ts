import {
  Component,
  ContentChildren,
  AfterContentInit,
  QueryList,
  TemplateRef,
  Input,
} from '@angular/core';
import { LteTemplate } from 'src/app/shared/ltemplate.directive';

@Component({
  selector: 'lte-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements AfterContentInit {
  @ContentChildren(LteTemplate) templates: QueryList<LteTemplate>;

  @Input() style: any;
  @Input() styleClass: string;
  @Input() sidebarMenuTogglerVisible = true;
  @Input() controlSidebarTogglerVisible = true;

  leftTemplate: TemplateRef<any>;
  rightTemplate: TemplateRef<any>;

  ngAfterContentInit(): void {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case 'left':
          this.leftTemplate = item.template;
          break;
        case 'right':
          this.rightTemplate = item.template;
          break;
      }
    });
  }
}
