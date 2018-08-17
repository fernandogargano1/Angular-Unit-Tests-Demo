import { FormBuilder } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component'; 

describe('TodoFormComponent', () => {
  var component: TodoFormComponent; 

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  });

  it('should create a form with 2 controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    // or expect(component.form.contains('name')).toBe(true);
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('should make the name control required', () => {
    let control = component.form.get('name'); // Getting the form control inside the form group

    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
});