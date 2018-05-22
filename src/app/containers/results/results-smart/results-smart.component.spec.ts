import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsSmartComponent } from './results-smart.component';

describe('ResultsSmartComponent', () => {
  let component: ResultsSmartComponent;
  let fixture: ComponentFixture<ResultsSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
