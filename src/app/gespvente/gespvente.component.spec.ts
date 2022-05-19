import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GespventeComponent } from './gespvente.component';

describe('GespventeComponent', () => {
  let component: GespventeComponent;
  let fixture: ComponentFixture<GespventeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GespventeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GespventeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
