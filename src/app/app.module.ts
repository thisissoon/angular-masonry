import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MasonryModule } from './masonry/masonry.module';
import { Masonry } from './masonry/masonry-token';

import { AppComponent } from './app.component';

const masonryProviders = [
  { provide: Masonry, useFactory: () => window['Masonry'] }
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MasonryModule.forRoot(masonryProviders)],
  bootstrap: [AppComponent]
})
export class AppModule {}
