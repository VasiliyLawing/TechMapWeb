import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSchoolsComponent } from './edit.component';

describe('EditComponent', () => {
  let component: EditSchoolsComponent;
  let fixture: ComponentFixture<EditSchoolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSchoolsComponent]
    });
    fixture = TestBed.createComponent(EditSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
