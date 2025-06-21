import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { AppRoutingModule } from './app-routing-module';
import { ArticleList } from './articles/article-list/article-list';
import { ArticleItem } from './articles/article-item/article-item';

@NgModule({
  declarations: [
    App,
    ArticleList,
    ArticleItem
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
