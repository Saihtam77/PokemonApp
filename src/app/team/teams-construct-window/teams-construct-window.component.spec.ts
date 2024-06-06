import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsConstructWindowComponent } from './teams-construct-window.component';

describe('TeamsConstructWindowComponent', () => {
  let component: TeamsConstructWindowComponent;
  let fixture: ComponentFixture<TeamsConstructWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamsConstructWindowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamsConstructWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
