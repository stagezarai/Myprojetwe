import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteComponent } from './recette.component';

describe('RecetteComponent', () => {
  let component: RecetteComponent;
  let fixture: ComponentFixture<RecetteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecetteComponent]
    });
    fixture = TestBed.createComponent(RecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
