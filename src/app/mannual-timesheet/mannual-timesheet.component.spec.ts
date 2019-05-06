import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MannualTimesheetComponent } from './mannual-timesheet.component';

describe('MannualTimesheetComponent', () => {
  let component: MannualTimesheetComponent;
  let fixture: ComponentFixture<MannualTimesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MannualTimesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MannualTimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
