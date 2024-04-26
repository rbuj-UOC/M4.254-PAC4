import { Component, OnInit } from '@angular/core';
import { Article } from "../../model/article";

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent implements OnInit {
  public article: Article;
  public articleClasses;

  constructor() { }

  ngOnInit() {
    this.article = {
      name: 'Aerosmith: Permanent Vacation',
      imageUrl: 'assets/records/permanent-vacation.webp',
      price: 31.99,
      isOnSale: false,
      quantityInCart: 0
    };
    this.articleClasses = {
      "on-sale": this.article.isOnSale,
      "not-on-sale": !this.article.isOnSale
    };
  }

  incrementInCart() {
    this.article.quantityInCart++;
  }

  decrementInCart() {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
    }
  }

}
