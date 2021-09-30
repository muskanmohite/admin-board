import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UielementComponent } from './uielement.component';

describe('UielementComponent', () => {
  let component: UielementComponent;
  let fixture: ComponentFixture<UielementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UielementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UielementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
