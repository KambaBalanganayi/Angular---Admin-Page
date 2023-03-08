import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonTrouveeComponent } from './non-trouvee.component';

describe('NonTrouveeComponent', () => {
  let component: NonTrouveeComponent;
  let fixture: ComponentFixture<NonTrouveeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonTrouveeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonTrouveeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
