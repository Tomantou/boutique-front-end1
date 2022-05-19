import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GesfactureComponent } from './gesfacture.component';

describe('GesfactureComponent', () => {
  let component: GesfactureComponent;
  let fixture: ComponentFixture<GesfactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GesfactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GesfactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
