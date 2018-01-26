import { MasonryOptions } from './masonry-options.model';
import { MasonryInstance } from './masonry-instance.model';

/**
 * An implemenation of the masonry library to be used
 * as a dummy when running on a server
 */
export function MasonryRef(
  element: string | HTMLElement,
  options: MasonryOptions
): MasonryInstance {
  return {
    layout: () => null,
    destroy: () => null,
    stamp: () => null,
    unstamp: () => null,
    appended: () => null,
    prepended: () => null,
    addItems: () => null,
    remove: () => null,
    on: () => null,
    off: () => null,
    once: () => null,
    reloadItems: () => null,
    getItemElements: () => null
  };
}
