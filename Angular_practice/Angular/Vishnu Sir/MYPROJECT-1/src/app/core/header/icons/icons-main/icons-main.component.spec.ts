import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsMainComponent } from './icons-main.component';

describe('IconsMainComponent', () => {
  let component: IconsMainComponent;
  let fixture: ComponentFixture<IconsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
