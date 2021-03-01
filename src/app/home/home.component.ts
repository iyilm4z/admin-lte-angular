import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('AdminLTE 3 | Starter');
  }
}
