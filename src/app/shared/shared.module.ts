import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LteTemplate } from './ltemplate.directive';

@NgModule({
  imports: [CommonModule],
  exports: [LteTemplate],
  declarations: [LteTemplate],
})
export class SharedModule {}
