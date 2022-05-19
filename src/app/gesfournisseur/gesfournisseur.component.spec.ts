import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GesfournisseurComponent } from './gesfournisseur.component';

describe('GesfournisseurComponent', () => {
  let component: GesfournisseurComponent;
  let fixture: ComponentFixture<GesfournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GesfournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GesfournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
