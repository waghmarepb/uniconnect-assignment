import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerFullWidthComponent } from './banner-full-width.component';

describe('BannerFullWidthComponent', () => {
  let component: BannerFullWidthComponent;
  let fixture: ComponentFixture<BannerFullWidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerFullWidthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerFullWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
