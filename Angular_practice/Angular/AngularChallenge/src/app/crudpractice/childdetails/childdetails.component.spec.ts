import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilddetailsComponent } from './childdetails.component';

describe('ChilddetailsComponent', () => {
  let component: ChilddetailsComponent;
  let fixture: ComponentFixture<ChilddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChilddetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChilddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
