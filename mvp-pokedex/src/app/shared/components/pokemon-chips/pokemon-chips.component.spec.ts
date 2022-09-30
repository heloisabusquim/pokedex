import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonChipsComponent } from './pokemon-chips.component';

describe('PokemonChipsComponent', () => {
  let component: PokemonChipsComponent;
  let fixture: ComponentFixture<PokemonChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonChipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
