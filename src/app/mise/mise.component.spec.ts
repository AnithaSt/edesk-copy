import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiseComponent } from './mise.component';

describe('MiseComponent', () => {
  let component: MiseComponent;
  let fixture: ComponentFixture<MiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
