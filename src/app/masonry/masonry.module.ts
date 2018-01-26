import { NgModule, ModuleWithProviders, Provider } from '@angular/core';

import { MasonryRef } from './masonry-ref';
import { Masonry } from './masonry-token';

const defaultProviders = [
  { provide: Masonry, useValue: MasonryRef }
];

/**
 * A simple lightweight module to use Masonry layout in Angular
 *
 * {@link https://masonry.desandro.com/}
 *
 */
@NgModule()
export class MasonryModule {
  /**
   * Specify a static method for root module to ensure providers
   * are only provided once but allows the module to still be imported
   * into other modules without reproviding services.
   *
   * @memberof MasonryModule
   */
  public static forRoot(providers: Provider[] = defaultProviders): ModuleWithProviders {
    return {
      ngModule: MasonryModule,
      providers: providers
    };
  }
}
