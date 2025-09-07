import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalGov } from './local-gov';

describe('LocalGov', () => {
  let component: LocalGov;
  let fixture: ComponentFixture<LocalGov>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalGov]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalGov);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
