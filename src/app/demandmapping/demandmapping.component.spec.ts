import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandmappingComponent } from './demandmapping.component';

describe('DemandmappingComponent', () => {
  let component: DemandmappingComponent;
  let fixture: ComponentFixture<DemandmappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandmappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandmappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
