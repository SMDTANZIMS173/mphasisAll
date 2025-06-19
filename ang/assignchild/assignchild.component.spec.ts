import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignchildComponent } from './assignchild.component';

describe('AssignchildComponent', () => {
  let component: AssignchildComponent;
  let fixture: ComponentFixture<AssignchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignchildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
