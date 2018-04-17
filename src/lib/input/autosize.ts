/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {Directive, Input} from '@angular/core';


/**
 * Directive to automatically resize a textarea to fit its content.
 * @deletion-target 7.0.0 deprecate in favor of `cdkTextareaAutosize`.
 */
@Directive({
  selector: 'textarea[mat-autosize], textarea[matTextareaAutosize]',
  exportAs: 'matTextareaAutosize',
  inputs: ['cdkAutosizeMinRows', 'cdkAutosizeMaxRows'],
  host: {
    'class': 'cdk-textarea-autosize mat-autosize',
    // Textarea elements that have the directive applied should have a single row by default.
    // Browsers normally show two rows by default and therefore this limits the minRows binding.
    'rows': '1',
    '(input)': '_noopInputHandler()',
  },
})
export class MatTextareaAutosize extends CdkTextareaAutosize {
  @Input()
  get matAutosizeMinRows(): number { return this.minRows; }
  set matAutosizeMinRows(value: number) { this.minRows = value; }

  @Input()
  get matAutosizeMaxRows(): number { return this.maxRows; }
  set matAutosizeMaxRows(value: number) { this.maxRows = value; }
}
