import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GesmarqueComponent } from './gesmarque.component';

describe('GesmarqueComponent', () => {
  let component: GesmarqueComponent;
  let fixture: ComponentFixture<GesmarqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GesmarqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GesmarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
