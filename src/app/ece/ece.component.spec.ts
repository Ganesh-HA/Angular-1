import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EceComponent } from './ece.component';

describe('EceComponent', () => {
  let component: EceComponent;
  let fixture: ComponentFixture<EceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EceComponent]
    });
    fixture = TestBed.createComponent(EceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
