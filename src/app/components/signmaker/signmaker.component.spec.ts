import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignmakerComponent } from './signmaker.component';

describe('SignmakerComponent', () => {
  let component: SignmakerComponent;
  let fixture: ComponentFixture<SignmakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignmakerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignmakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
