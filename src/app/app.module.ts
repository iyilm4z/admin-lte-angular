import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { DemoModule } from './demo/demo.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './demo/home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    SharedModule,
    DemoModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent,
        children: [{ path: 'home', component: HomeComponent }],
      },
    ]),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
