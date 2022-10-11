import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuddetailsComponent } from './studdetails.component';

describe('StuddetailsComponent', () => {
  let component: StuddetailsComponent;
  let fixture: ComponentFixture<StuddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuddetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
