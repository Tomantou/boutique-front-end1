import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GescommandeComponent } from './gescommande.component';

describe('GescommandeComponent', () => {
  let component: GescommandeComponent;
  let fixture: ComponentFixture<GescommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GescommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GescommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
