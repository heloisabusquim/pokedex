import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomBntComponent } from './random-bnt.component';

describe('RandomBntComponent', () => {
  let component: RandomBntComponent;
  let fixture: ComponentFixture<RandomBntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomBntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomBntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
