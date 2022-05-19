import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GesproduitComponent } from './gesproduit.component';

describe('GesproduitComponent', () => {
  let component: GesproduitComponent;
  let fixture: ComponentFixture<GesproduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GesproduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GesproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
