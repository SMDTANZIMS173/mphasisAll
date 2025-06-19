import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignparentComponent } from './assignparent.component';

describe('AssignparentComponent', () => {
  let component: AssignparentComponent;
  let fixture: ComponentFixture<AssignparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignparentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
