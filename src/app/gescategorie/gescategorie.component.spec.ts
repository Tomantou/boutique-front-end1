import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GescategorieComponent } from './gescategorie.component';

describe('GescategorieComponent', () => {
  let component: GescategorieComponent;
  let fixture: ComponentFixture<GescategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GescategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GescategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
