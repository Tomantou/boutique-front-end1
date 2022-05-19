import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GespromoComponent } from './gespromo.component';

describe('GespromoComponent', () => {
  let component: GespromoComponent;
  let fixture: ComponentFixture<GespromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GespromoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GespromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
