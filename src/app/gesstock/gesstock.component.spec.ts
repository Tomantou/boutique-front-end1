import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GesstockComponent } from './gesstock.component';

describe('GesstockComponent', () => {
  let component: GesstockComponent;
  let fixture: ComponentFixture<GesstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GesstockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GesstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
