import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignmakerNavBarComponent } from './signmaker-nav-bar.component';

describe('SignmakerNavBarComponent', () => {
  let component: SignmakerNavBarComponent;
  let fixture: ComponentFixture<SignmakerNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignmakerNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignmakerNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
