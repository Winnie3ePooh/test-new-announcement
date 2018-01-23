import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { MyRouterModule } from './my-router/my-router.module';
import { HttpClientModule } from '@angular/common/http';
import { NewsItemComponent } from './news-item/news-item.component'


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NewsItemComponent
  ],
  imports: [
    BrowserModule,
    MyRouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
