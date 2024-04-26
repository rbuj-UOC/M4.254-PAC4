import { Component } from '@angular/core';
import { Article } from "../../model/article";

@Component({
  selector: 'app-article-list',
  template: `
    <div class="article-list">
      <div class="article-item" [class]="article.isOnSale ? 'article-item sale' : ''" *ngFor="let article of articles; index as i">
        <img [src]="article.imageUrl">
        <div class="container">
            <div class="name">{{article.name}}</div>
            <div class="prize" [class]="!article.isOnSale ? 'prize not-on-sale' : ''">{{article.price}} €</div>
            <div class="quantity" *ngIf="article.isOnSale">
                <div><button [disabled]="article.quantityInCart == 0" (click)="decrementInCart($event, i)">-</button></div>
                <div>{{article.quantityInCart}}</div>
                <div><button (click)="incrementInCart($event, i)">+</button></div>
            </div>
        </div>
      </div>
    </div>
  `,
  styles: `
    .article-item {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        max-width: 200px;
        margin: 10px;
    }

    .article-item:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    .article-item img {
        width: 100%;
    }

    .article-item .container {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 10px;
        text-align: center;
        padding: 10px;
    }

    .article-item .quantity {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 10px;
        justify-content: center;
    }

    .article-item.sale {
        background-color: #C3C3E5;
    }

    .article-list {
        display: flex;
        padding: 10px;
    }

    .prize.not-on-sale {
        color: gray;
    }
  `
})
export class ArticleListComponent {

  public articles: Array<Article>;

  constructor() { }

  ngOnInit() {
    this.articles = [
      {
        name: 'Aerosmith: Permanent Vacation',
        imageUrl: 'assets/records/permanent-vacation.webp',
        price: 31.99,
        isOnSale: true,
        quantityInCart: 0
      },
      {
        name: 'The Beatles: Sgt. Pepper`s Lonely Hearts Club Band',
        imageUrl: 'assets/records/beatles.webp',
        price: 36.99,
        isOnSale: false,
        quantityInCart: 0
      },
      {
        name: 'Pulp Fiction',
        imageUrl: 'assets/records/pulp-fiction.webp',
        price: 25.99,
        isOnSale: true,
        quantityInCart: 0
      }
    ];
  }

  incrementInCart(event, index) {
    this.articles[index].quantityInCart++;
  }

  decrementInCart(event, index) {
    if (this.articles[index].quantityInCart > 0) {
      this.articles[index].quantityInCart--;
    }
  }
}
