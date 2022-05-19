import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GessignaletiqueComponent } from './gessignaletique.component';

describe('GessignaletiqueComponent', () => {
  let component: GessignaletiqueComponent;
  let fixture: ComponentFixture<GessignaletiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GessignaletiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GessignaletiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
