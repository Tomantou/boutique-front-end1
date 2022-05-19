import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GesnewsComponent } from './gesnews.component';

describe('GesnewsComponent', () => {
  let component: GesnewsComponent;
  let fixture: ComponentFixture<GesnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GesnewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GesnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
