import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudmethodComponent } from './crudmethod.component';

describe('CrudmethodComponent', () => {
  let component: CrudmethodComponent;
  let fixture: ComponentFixture<CrudmethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudmethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudmethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
