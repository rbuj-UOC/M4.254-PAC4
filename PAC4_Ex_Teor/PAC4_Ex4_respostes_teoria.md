# Exercici 4 – Directives d'atribut i directives estructurals (1.5 punts)

## 4.1
Valors locals disponibles en el context d'una directiva `NgFor`:
* `index` fa referència a l'índex d'elements actual
* `even` és cert si l'element té un índex parell
* `odd` és cert si l'element té un índex senar
* `first` és cert quan l'element és el primer element de la seqüència
* `last` és cert quan l'element és l'últim element de la seqüència

## 4.2
L'opció `trackBy` serveix quan es canvia la referència d'un element però encara es vol utilitzar el mateix element. L'opció `trackBy` pren una funció de dos paràmetres, l'índex i l'element. Quan es proporciona la funció `trackBy`, la directiva `NgFor` utilitzarà el valor de retorn de la funció per identificar els valors individuals. Per exemple es pot utilitzar un identificador per identificar un producte en comptes de la referència a l'objecte.

Element distintiu `code` de la classe `Stock`:
```ts
export class Stock {
...
  constructor(public name: string,
              public code: string,
              public price: number,
              public previousPrice: number) {}
...
}
```
Funció `trackStockByCode` que retorna el codi del producte com a element distintiu per a l'opció `trackBy`de la directiva `NgFor`:
```ts
export class StockItemComponent implements OnInit {

  public stocks: Array<Stock>;

  constructor() { }

  ngOnInit() {
    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 80),
      new Stock('Second Stock Company', 'SSC', 10, 20),
      new Stock('Last Stock Company', 'LSC', 876, 765)
    ];
  }

...

  trackStockByCode(index, stock) {
    return stock.code;
  }
}
```

Exemple d'`ngFor`amb `trackBy`:
```ts
<li *ngFor="let stock of stocks; index as i; trackBy: trackStockByCode">{{i}} - {{stocks.code}} - {{stocks.name}}</li>
```

## 4.3
Angular no permet utilitzar més d'una directiva estructural en un mateix element.

No hi ha una manera obvia per establir la preferència de les directives estructurals.

En el següent exemple, ambdós casos semblen molt similars, però la intenció i l'expectativa són molt diferents. En el primer cas, esperem que el `*ngFor` s'executi primer seguit del `*ngIf`, i viceversa en el segon cas.

Cas 1:
```ts
<div *ngFor="let stock of stocks" *ngIf="stock.active">
 <!-- Show stock details here if stock is active -->
</div>
```

Cas 2:
```ts
<div *ngFor="let stock of stocks" *ngIf="stocks.length > 2">
  <!-- Show stock details here if more than 2 stocks present -->
</div>
```

Exemple extret de [Chapter 3. Useful Built-In Angular Directives. Angular: Up and Running. Seshadri S.](https://learning.oreilly.com/library/view/angular-up-and/9781491999820/ch03.html#idm139828136344064)