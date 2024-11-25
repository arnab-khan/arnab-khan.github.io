import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RisingLinesAnimationComponent } from './rising-lines-animation.component';

describe('RisingLinesAnimationComponent', () => {
  let component: RisingLinesAnimationComponent;
  let fixture: ComponentFixture<RisingLinesAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RisingLinesAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RisingLinesAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
