import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSide } from './home-side';

describe('HomeSide', () => {
  let component: HomeSide;
  let fixture: ComponentFixture<HomeSide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSide);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
