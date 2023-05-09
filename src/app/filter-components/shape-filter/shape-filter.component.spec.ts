import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeFilterComponent } from './shape-filter.component';

describe('ShapeFilterComponent', () => {
  let component: ShapeFilterComponent;
  let fixture: ComponentFixture<ShapeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShapeFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShapeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
