import { Directive, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[lteTemplate]',
  host: {},
})
export class LteTemplate {
  @Input() type: string;

  @Input('lteTemplate') name: string;

  constructor(public template: TemplateRef<any>) {}

  getType(): string {
    return this.name;
  }
}
