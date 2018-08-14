import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { SalesModule } from './view/sales/sales.module';
import { ViewModule } from './view/view/view.module';
import { AppConfig } from './app.config';

export function initConfig(config: AppConfig) {
  return () => config.load()
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    SalesModule,
    ViewModule,
    routing
  ],
  providers: [
    AppConfig,
    { provide: APP_INITIALIZER, useFactory: initConfig, deps: [AppConfig], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
