import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultCardRowComponent } from './result-card-row.component';

@Component({
  template: `
    <em-result-card-row [property]="prop">{{content}}</em-result-card-row>`
})
class TestHostComponent {
  content: string = 'mock content';
  prop: string = 'mock prop';
}

describe('ResultCardRowComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHostComponent, ResultCardRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(testHost).toBeTruthy();
  });

  it('should set property name to foo, render in dom as foo:', () => {
    testHost.prop = 'foo';
    fixture.detectChanges();

    const target = fixture.nativeElement.querySelector('.property').innerText;

    expect(target).toEqual('foo:');
  });

  it('should display the content as "bar"', () => {
    testHost.content = 'bar';
    fixture.detectChanges();

    const target = fixture.nativeElement.querySelector('.value').innerText;

    expect(target).toEqual('bar');
  });

});
