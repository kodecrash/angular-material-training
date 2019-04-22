import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleformComponent } from './simpleform.component';
import { FormBuilder } from '@angular/forms';

describe('SimpleformComponent', () => {
  let component: SimpleformComponent;
  let fb: FormBuilder;



  beforeEach(() => {
    fb = new FormBuilder();
    component = new SimpleformComponent(fb);
  });

  it('should create form with firstname control', () => {
    expect(component.form.contains('firstname')).toBeTruthy();
  });

  it('should make the firstname field as required', () => {
    const control = component.form.get('firstname');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
});
