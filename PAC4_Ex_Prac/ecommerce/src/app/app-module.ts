import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { AppRoutingModule } from './app-routing-module';
import { ArticleItem } from './articles/article-item/article-item';
import { ArticleList } from './articles/article-list/article-list';

@NgModule({
  declarations: [App, ArticleList, ArticleItem],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App]
})
export class AppModule {}
