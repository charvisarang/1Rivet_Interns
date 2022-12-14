import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudformComponent } from './crudform.component';

describe('CrudformComponent', () => {
  let component: CrudformComponent;
  let fixture: ComponentFixture<CrudformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
