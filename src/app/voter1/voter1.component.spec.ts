import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Voter1Component } from './voter1.component';
import { By } from '@angular/platform-browser';

describe('Voter1Component', () => {
  let component: Voter1Component;
  let fixture: ComponentFixture<Voter1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Voter1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Voter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should display totalvote count', () => {
    component.myVote = 1;
    component.othersVote = 20;
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('.vote-count'));
    let el: HTMLElement = de.nativeElement;
    expect(el.innerText).toContain('21');
  });
});
