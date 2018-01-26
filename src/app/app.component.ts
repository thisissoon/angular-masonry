import {
  Component, Inject, ViewChild,
  ElementRef, AfterViewInit, OnDestroy
} from '@angular/core';

import { Masonry } from './masonry/masonry-token';
import { MasonryOptions } from './masonry/masonry-options.model';
import { MasonryInstance } from './masonry/masonry-instance.model';
import { cards } from './cards';

@Component({
  selector: 'sn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {

  @ViewChild('grid')
  public grid: ElementRef;

  public masonryInstance: MasonryInstance;

  public cards = cards;

  constructor(@Inject(Masonry) public masonry) { }

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
