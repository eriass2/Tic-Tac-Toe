import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button style="background-color: lightgrey;" *ngIf="!value">{{ value }}</button>
    <button  style="background-color: cadetblue;"  *ngIf="value == 'X'">{{ value }}</button>
    <button  style="background-color: palevioletred;"  *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent {

  @Input() value: 'X' | 'O';

}
