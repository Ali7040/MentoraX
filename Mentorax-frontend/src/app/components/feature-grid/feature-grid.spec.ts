import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureGrid } from './feature-grid';

describe('FeatureGrid', () => {
  let component: FeatureGrid;
  let fixture: ComponentFixture<FeatureGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
