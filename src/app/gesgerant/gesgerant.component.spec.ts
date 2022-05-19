import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GesgerantComponent } from './gesgerant.component';

describe('GesgerantComponent', () => {
  let component: GesgerantComponent;
  let fixture: ComponentFixture<GesgerantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GesgerantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GesgerantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
