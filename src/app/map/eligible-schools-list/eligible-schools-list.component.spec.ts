import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibleSchoolsListComponent } from './eligible-schools-list.component';

describe('EligibleSchoolsListComponent', () => {
  let component: EligibleSchoolsListComponent;
  let fixture: ComponentFixture<EligibleSchoolsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EligibleSchoolsListComponent]
    });
    fixture = TestBed.createComponent(EligibleSchoolsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
