import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { MasonryModule } from './masonry/masonry.module';
import { Masonry } from './masonry/masonry-token';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let mockMasonry;
  let layoutSpy = jasmine.createSpy('layout');
  let destroySpy = jasmine.createSpy('layout');

  describe('Masonry library loaded', () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;
    let compiled: HTMLElement;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          MasonryModule.forRoot([
            { provide: Masonry, useFactory: () => window['Masonry'] }
          ])
        ],
        declarations: [AppComponent]
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.debugElement.componentInstance;
      fixture.detectChanges();
      compiled = fixture.debugElement.nativeElement;
    });

    it('should render 10 cards', async(() => {
      expect(compiled.querySelectorAll('.card').length).toBe(10);
    }));

    it('should layout cards', async(() => {
      expect(compiled.querySelector('.grid').getAttribute('style')).toContain(
        'position: relative'
      );

      const gridStyle = compiled
        .querySelectorAll('.grid')
        .item(0)
        .getAttribute('style');
      expect(gridStyle).toContain('position: relative');
      expect(gridStyle).toContain('width:');
      expect(gridStyle).toContain('height:');

      const cardStyle = compiled
        .querySelectorAll('.card')
        .item(0)
        .getAttribute('style');
      expect(cardStyle).toContain('position: absolute');
      expect(cardStyle).toContain('left:');
      expect(cardStyle).toContain('top:');
    }));

    it('should call masonry destroy function', async(() => {
      component.ngOnDestroy();
      fixture.detectChanges();
      expect(compiled.querySelector('.grid').getAttribute('style')).toBe('');
      expect(
        compiled
          .querySelectorAll('.card')
          .item(0)
          .getAttribute('style')
      ).toBe('');
    }));
  });

  describe('Mock Masonry', () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;
    let compiled: HTMLElement;

    beforeEach(async(() => {
      layoutSpy = jasmine.createSpy('layout');
      destroySpy = jasmine.createSpy('destroy');

      mockMasonry = function() {
        return {
          layout: layoutSpy,
          destroy: destroySpy
        };
      };

      TestBed.configureTestingModule({
        imports: [
          MasonryModule.forRoot([{ provide: Masonry, useValue: mockMasonry }])
        ],
        declarations: [AppComponent]
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.debugElement.componentInstance;
      fixture.detectChanges();
      compiled = fixture.debugElement.nativeElement;
    });

    it('should render 10 cards', async(() => {
      expect(compiled.querySelectorAll('.card').length).toBe(10);
    }));

    it('should call masonry layout function', async(() => {
      component.layout();
      expect(layoutSpy).toHaveBeenCalled();
    }));

    it('should call masonry destroy function', async(() => {
      component.ngOnDestroy();
      expect(destroySpy).toHaveBeenCalled();
    }));
  });
});
