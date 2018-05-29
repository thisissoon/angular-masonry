# Angular Masonry

[![Build Status][travis-badge]][travis]
[![Coverage Status][coveralls-badge]][coveralls]
[![Commitizen friendly][commitizen-badge]][commitizen]
[![code style: prettier][prettier-badge]][prettier-badge-url]

A simple, lightweight library to use [Masonry][masonry] in [Angular][angular]

This is a simple library for [Angular][angular], implemented in the [Angular Package Format v5.0](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/edit#heading=h.k0mh3o8u5hx).

## Install

### via NPM

`npm i @thisissoon/angular-masonry masonry-layout --save`

### via Yarn

`yarn add @thisissoon/angular-masonry masonry-layout`

`app.module.ts`

```ts
import { MasonryModule } from '@thisissoon/angular-masonry';

const masonryProviders = [
  { provide: Masonry, useFactory: () => window['Masonry'] }
];

@NgModule({
  imports: [MasonryModule.forRoot(masonryProviders)]
})
export class AppModule {}
```

`angular.json`

Add the Masonry library javascript to your angular cli config

```ts
"scripts": [
  "../node_modules/masonry-layout/dist/masonry.pkgd.js"
],
```

#### Universal app (only needed if using platform-server)

`app.server.module.ts`

```ts
import { MasonryModule } from '@thisissoon/angular-masonry';

@NgModule({
  imports: [
    // no need to provide window['Masonry'] here as
    // a mock implemention is provided by default
    MasonryModule.forRoot()
  ]
})
export class AppServerModule {}
```

## Example

A full working example can be found in the [src/app](https://github.com/thisissoon/angular-masonry/tree/master/src/app) folder.

### `app.component.ts`

```ts
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild('grid') public grid: ElementRef;

  public masonryInstance: MasonryInstance;

  public cards = cards;

  constructor(@Inject(Masonry) public masonry) {}

  ngAfterViewInit() {
    const options: MasonryOptions = {
      itemSelector: '.card',
      columnWidth: '.card',
      gutter: 20,
      fitWidth: true
    };
    this.masonryInstance = new this.masonry(this.grid.nativeElement, options);
  }

  layout() {
    this.masonryInstance.layout();
  }

  ngOnDestroy() {
    this.masonryInstance.destroy();
  }
}
```

### `app.component.css`

Styling is just an example

```css
:host {
  display: block;
  margin-top: 1rem;
}

.grid {
  margin: 0 auto;
}

.card {
  display: inline-block;
  margin-bottom: 1rem;
  width: 18rem;
}
```

### `app.component.html`

```html
<div class="grid" #grid>
  <div class="card" *ngFor="let card of cards">
    <div class="card-body">
      <h5 class="card-title">{{ card.title }}</h5>
      <p class="card-text">{{ card.text }}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma][karma].

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor][protractor].

## Making Commits

This repo uses [Commitizen CLI][commitizen] and [Conventional Changelog][conventional-changelog] to create commits and generate changelogs. Instead of running `git commit` run `git cz` and follow the prompts. Changelogs will then be generated when creating new releases by running `npm run release`.

## Making Releases

Run `npm run release` to create a new release. This will use [Standard Version][standard-version] to create a new release. [Standard Version][standard-version] will generate / update the changelog based on commits generated using [Commitizen CLI][commitizen], update the version number following semantic versioning rules and then commit and tag the commit for the release. Simply run `git push --follow-tags origin master`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README][angular-cli-readme].

[travis]: https://travis-ci.org/thisissoon/angular-masonry
[travis-badge]: https://travis-ci.org/thisissoon/angular-masonry.svg?branch=master
[coveralls]: https://coveralls.io/github/thisissoon/angular-masonry?branch=master
[coveralls-badge]: https://coveralls.io/repos/github/thisissoon/angular-masonry/badge.svg?branch=master
[commitizen]: http://commitizen.github.io/cz-cli/
[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[prettier-badge]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=shield
[prettier-badge-url]: https://github.com/prettier/prettier
[conventional-changelog]: https://github.com/conventional-changelog/conventional-changelog
[standard-version]: https://github.com/conventional-changelog/standard-version
[karma]: https://karma-runner.github.io
[protractor]: http://www.protractortest.org/
[angular]: https://angular.io/
[angular-cli]: https://github.com/angular/angular-cli
[angular-cli-readme]: https://github.com/angular/angular-cli/blob/master/README.md
[masonry]: https://masonry.desandro.com/
