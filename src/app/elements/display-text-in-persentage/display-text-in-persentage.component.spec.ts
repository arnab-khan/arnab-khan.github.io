import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTextInPersentageComponent } from './display-text-in-persentage.component';

describe('DisplayTextInPersentageComponent', () => {
  let component: DisplayTextInPersentageComponent;
  let fixture: ComponentFixture<DisplayTextInPersentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayTextInPersentageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayTextInPersentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
