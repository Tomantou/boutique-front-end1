import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotomComponent } from './botom.component';

describe('BotomComponent', () => {
  let component: BotomComponent;
  let fixture: ComponentFixture<BotomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
