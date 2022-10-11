import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudpracticeComponent } from './crudpractice.component';

describe('CrudpracticeComponent', () => {
  let component: CrudpracticeComponent;
  let fixture: ComponentFixture<CrudpracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudpracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
