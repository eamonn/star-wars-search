import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultCardRowComponent } from './result-card-row.component';

describe('ResultCardRowComponent', () => {
  let component: ResultCardRowComponent;
  let fixture: ComponentFixture<ResultCardRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultCardRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultCardRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
