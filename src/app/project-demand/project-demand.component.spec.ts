import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDemandComponent } from './project-demand.component';

describe('ProjectDemandComponent', () => {
  let component: ProjectDemandComponent;
  let fixture: ComponentFixture<ProjectDemandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDemandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
