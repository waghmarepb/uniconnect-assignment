import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyChooseVistaComponent } from './why-choose-vista.component';

describe('WhyChooseVistaComponent', () => {
  let component: WhyChooseVistaComponent;
  let fixture: ComponentFixture<WhyChooseVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyChooseVistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyChooseVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
