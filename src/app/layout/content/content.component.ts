import {
  Component,
  Input,
  ContentChildren,
  QueryList,
  AfterContentInit,
  TemplateRef,
} from '@angular/core';
import { LteTemplate } from 'src/app/shared/ltemplate.directive';

@Component({
  selector: 'lte-content',
  templateUrl: './content.component.html',
})
export class ContentComponent implements AfterContentInit {
  @ContentChildren(LteTemplate) templates: QueryList<LteTemplate>;

  @Input() style: any;
  @Input() styleClass: string;
  @Input() headerLabel: string;
  @Input() headerDescription: string;
  @Input() headerFluid = true;

  headerLeftTemplate: TemplateRef<any>;
  headerRightTemplate: TemplateRef<any>;
  afterHeaderTemplate: TemplateRef<any>;

  ngAfterContentInit(): void {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case 'headerLeft':
          this.headerLeftTemplate = item.template;
          break;
        case 'headerRight':
          this.headerRightTemplate = item.template;
          break;
        case 'afterHeader':
          this.afterHeaderTemplate = item.template;
          break;
      }
    });
  }
}
