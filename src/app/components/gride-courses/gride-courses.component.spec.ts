import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrideCoursesComponent } from './gride-courses.component';

describe('GrideCoursesComponent', () => {
  let component: GrideCoursesComponent;
  let fixture: ComponentFixture<GrideCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrideCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrideCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
