import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapesSideBarComponent } from './shapes-side-bar.component';

describe('ShapesSideBarComponent', () => {
  let component: ShapesSideBarComponent;
  let fixture: ComponentFixture<ShapesSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShapesSideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShapesSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
