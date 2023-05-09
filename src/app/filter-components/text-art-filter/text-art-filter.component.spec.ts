import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextArtFilterComponent } from './text-art-filter.component';

describe('TextArtFilterComponent', () => {
  let component: TextArtFilterComponent;
  let fixture: ComponentFixture<TextArtFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextArtFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextArtFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
