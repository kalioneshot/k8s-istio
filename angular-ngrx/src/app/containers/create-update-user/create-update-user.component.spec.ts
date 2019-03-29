import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateContainerComponent } from './create-update-user.component';

describe('CreateUserComponent', () => {
  let component: CreateUpdateContainerComponent;
  let fixture: ComponentFixture<CreateUpdateContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUpdateContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
