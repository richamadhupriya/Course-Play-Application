import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseswithjsonComponent } from './courseswithjson.component';

describe('CourseswithjsonComponent', () => {
  let component: CourseswithjsonComponent;
  let fixture: ComponentFixture<CourseswithjsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseswithjsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseswithjsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
