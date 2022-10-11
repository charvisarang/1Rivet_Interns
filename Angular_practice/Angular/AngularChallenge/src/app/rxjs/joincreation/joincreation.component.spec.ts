import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoincreationComponent } from './joincreation.component';

describe('JoincreationComponent', () => {
  let component: JoincreationComponent;
  let fixture: ComponentFixture<JoincreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoincreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoincreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
