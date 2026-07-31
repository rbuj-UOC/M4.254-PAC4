import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ArticleList } from './articles/article-list/article-list';
import { ArticleItem } from './articles/article-item/article-item';

@NgModule({
  declarations: [App, ArticleList, ArticleItem],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true })
  ],
  bootstrap: [App]
})
export class AppModule {}
