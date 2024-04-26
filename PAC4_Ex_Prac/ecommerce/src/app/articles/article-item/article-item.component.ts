import { Component, OnInit } from '@angular/core';
import { Article } from "../../model/article";

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent implements OnInit {
  public article: Article;

  constructor() { }

  ngOnInit() {
    this.article = {
      name: 'Aerosmith: Permanent Vacation',
      imageUrl: 'assets/records/permanent-vacation.webp',
      price: 31.99,
      isOnSale: true,
      quantityInCart: 0
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
