
# Exercici 2 – Hola Món amb Angular (1.25 punts)

## 2.1 (0,75 punts)
Ordre per generar el projecte d'Angular anomenat `ecommerce`
```
ng new ecommerce --no-strict --standalone=false --style=css --ssr=no
```
### Estructura i fitxers generats

El framework `Angular` està construït i utilitza TypeScript; ambdos utilitzen Node.js.

* arrel del projecte:
  * `.angular` té fitxers necessaris per crear l'aplicació Angular.
  * `.editorconfig` estableix la gia d'estil, és compatible amb diversos editors de codi a través de connectors. [Més informació](https://editorconfig.org/)
  * `.gitignore` conté els fitxers i les carpetes que no se segueixen al dipòsit git. [Més informació](https://git-scm.com/docs/gitignore)
  * `angular.json` fitxer de configuració de l'espai de treball d'Angular. [Més informació](https://angular.io/guide/workspace-config)
  * `node_modules/` té els paquets node.js que utilitza l'aplicació, veure `package.json`. [Més informació](https://docs.npmjs.com/about-packages-and-modules)
  * `package.json` conté la configuració del paquet node.js, té tres seccions principals:
    * `scripts`: conté una llista d'scripts que es poden executar des de la línia de comandes, amb les ordres que s'utilitzen per compilar el codi font i executar el servidor HTTP de desenvolupament.
    * `dependencies`: és una llista de paquets NPM en què es basa l'aplicació web per executar-se, conté els paquets bàsics d'Angular i les biblioteques de les quals depèn Angular.
    * `devDependencies`: és una llista de paquets NPM dels quals es confia per al desenvolupament, però que l'aplicació no requereix un cop s'ha desplegat. Conté els paquets que compilaran els fitxers TypeScript, proporcionen un servidor HTTP de desenvolupament i realitzen proves.
  * `src/` carpeta on es troba el odi font del projecte.
    * `favicon.ico` és la icona de l'aplicació, tal com es trobara en qualsevol lloc web.
    * `index.html` és la plantilla HTML de nivell superior de l'aplicació.
    * `main.ts` és on comença a funcionar l'aplicació.
    * `styles.css` és el full d'estil de nivell superior de l'aplicació.
    * `assets/` aquesta carpeta conté les imatges utilitzades per l'aplicació
    * `app/` en aquesta carpeta es troben els fitxers de components de l'aplicació Angular.
      * `app.component.css` és el full d'estil d'aquest component.
      * `app.component.html` és la plantilla HTML d'aquest component.
      * `app.component.spec.ts` conté les proves unitàries d'aquest component.
      * `app.component.ts` és el fitxer de codi font que descriu el component `app-root`. Aquest és el component angular de nivell superior en l'aplicació. Un component és el bloc de construcció bàsic d'una aplicació Angular. La descripció del component inclou el codi del component, la plantilla HTML i els estils, que es poden descriure en aquest fitxer o en fitxers separats.
      * `app.module.ts` diu a Angular com construir i arrencar l'aplicació a l'arrel `AppModule`.
  * `tsconfing.*` són els fitxers que descriuen la configuració de l'aplicació al compilador TypeScript. [Més informació](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

[Més informació](https://angular.io/tutorial/first-app/first-app-lesson-01)

## 2.2 (0,25 punts)
Dins del fitxer `src/app/app.module.ts`, el decorador `@NgModule` identifica AppModule com una classe de mòdul d'angular (també anomenada classe `NgModule`). `@NgModule` pren un objecte `metadata` que indica a Angular com compilar i iniciar l'aplicació.

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleItemComponent } from './articles/article-item/article-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

* `imports` — Els mòduls d'Angular són una manera de consolidar les característiques que pertanyen en unitats discretes. Moltes característiques del propi Angular estan organitzades com a mòduls d'Angular. Els serveis HTTP es troben a `HttpModule`. L'encaminador es troba al `RouterModule`. La majoria d'aplicacions, s'executen en un navegador. Cada aplicació que s'executa en un navegador necessita el `BrowserModule` de `@angular/platform-browser`.
* `declarations` — diu a Angular quins components pertanyen a l'`AppModule`. A mesura que es creen més components, s'afegeixen a la `declarations`, per exemple `ArticleItemComponent`.
* `bootstrap` — el component arrel que Angular crea i insereix a la pàgina web de l'amfitrió `index.html`.

[Més informació](https://v2.angular.io/docs/ts/latest/guide/appmodule.html)

Dins del fitxer `src/app/app.component.ts`, el decorador `@Component` pren un objecte de configuració requerit amb la informació que Angular necessita per crear i presentar el component i la seva vista.
```ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
```

* `selector`: el selector CSS que Angular utilitzarà per crear i inserir una instància d'aquest component quan trobi una etiqueta `<app-root>` a l'HTML principal. Per exemple, si l'HTML d'una aplicació conté `<app-root></app-roto>`, llavors Angular insereix una instància de la vista `AppRootComponent` entre aquestes etiquetes.
* `templateUrl`: adreça relativa al mòdul de la plantilla HTML d'aquest component.
* `styleUrl`: adreça relativa al mòdul de l'estil d'aquest component.

[Més informació](https://v2.angular.io/docs/ts/latest/guide/architecture.html)

## 2.3 (0,25 punts)

Sí, es pot incrustar el codi de la plantilla HTML i el full d'estil dins del codi del component, amb les opcions [template](https://angular.io/api/core/Component#template) i [styles](https://angular.io/api/core/Component#styles). No obstant dificultarà el manteniment a mesura que augmentin les línies de codi i la complexitat dels components.

Exemple amb HTML i CSS incrustat al fitxer de codi font TypeScript del component:

```ts
@Component({
  selector: 'app-root',
  template: `
    <h1>Tour of Heroes</h1>
    <app-hero-main [hero]="hero"></app-hero-main>
  `,
  styles: ['h1 { font-weight: normal; }']
})
export class HeroAppComponent {
/* . . . */
}
```

Font: [Lesson 2: Create Home component, Tutorial: Your first Angular App](https://angular.io/tutorial/first-app/first-app-lesson-02).