import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
  forwardRef
} from '@angular/core';

import {
  FormControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validator
} from '@angular/forms';

import { CourseAuthor } from '../../entities';

@Component({
  selector: 'authors-list',
  templateUrl: 'authors-list.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['authors-list.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorsListComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AuthorsListComponent),
      multi: true
    }
  ]
})

export class AuthorsListComponent implements ControlValueAccessor, Validator {
  @Input() authorsList: CourseAuthor[];
  selectedAuthors: CourseAuthor[];

  constructor(
      private cd: ChangeDetectorRef
  ) {
    this.selectedAuthors = [];
  }

  onSelectAuthor(author: CourseAuthor, { target }: {target: HTMLInputElement}): void {
    const isChecked = target.checked;

    if (isChecked) {
      this.selectedAuthors.push(author);
    } else {
      const index = this.selectedAuthors.findIndex(item => item === author);

      this.selectedAuthors.splice(index, 1);
    }

    this.propagateChange(this.selectedAuthors);
    this.propagateTouch();
  }

  validate(c: FormControl): Object {
    return c.value.length ? null : { minSelectedAuthorsError: { valid: false } };
  }

  writeValue(value: any): void {
    this.selectedAuthors = value;

    this.cd.markForCheck();
  }

  isChecked(author: CourseAuthor): boolean {
    return this.selectedAuthors.some(el => el.id === author.id);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouch = fn;
  };

  propagateChange = (_: any) => { };
  propagateTouch = () => { };
}
