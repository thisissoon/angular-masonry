export interface MasonryInstance {
  layout: (...args) => void;
  destroy: (...args) => void;
  stamp: (...args) => void;
  unstamp: () =>  void;
  appended: (...args) => void;
  prepended: (...args) => void;
  addItems: (...args) => void;
  remove: (...args) => void;
  on: (...args) => void;
  off: (...args) => void;
  once: (...args) => void;
  reloadItems: (...args) => void;
  getItemElements: (...args) => void;
}
