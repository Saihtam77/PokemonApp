import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzurePokemonComponent } from './azure-pokemon.component';

describe('AzurePokemonComponent', () => {
  let component: AzurePokemonComponent;
  let fixture: ComponentFixture<AzurePokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AzurePokemonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AzurePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
