import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskRegisterComponent } from './task-register.component';

describe('TaskRegisterComponent', () => {
  let component: TaskRegisterComponent;
  let fixture: ComponentFixture<TaskRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskRegisterComponent]
    });
    fixture = TestBed.createComponent(TaskRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
