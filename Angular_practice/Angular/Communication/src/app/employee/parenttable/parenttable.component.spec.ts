import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenttableComponent } from './parenttable.component';

describe('ParenttableComponent', () => {
  let component: ParenttableComponent;
  let fixture: ComponentFixture<ParenttableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParenttableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParenttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
