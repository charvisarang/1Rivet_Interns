import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesMainComponent } from './themes-main.component';

describe('ThemesMainComponent', () => {
  let component: ThemesMainComponent;
  let fixture: ComponentFixture<ThemesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemesMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
