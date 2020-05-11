import {
  Component,
  AfterContentInit,
  ContentChildren,
  QueryList,
  TemplateRef,
  Input,
} from '@angular/core';
import { LteTemplate } from 'src/app/shared/ltemplate.directive';

@Component({
  selector: 'lte-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements AfterContentInit {
  @ContentChildren(LteTemplate) templates: QueryList<LteTemplate>;

  @Input() style: any;
  @Input() styleClass: string;

  rightTemplate: TemplateRef<any>;

  ngAfterContentInit(): void {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case 'right':
          this.rightTemplate = item.template;
          break;
      }
    });
  }
}
