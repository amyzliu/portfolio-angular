import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsetProjectsComponent } from './tabset-projects.component';

describe('TabsetProjectsComponent', () => {
  let component: TabsetProjectsComponent;
  let fixture: ComponentFixture<TabsetProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsetProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsetProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
