import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  template: `
    <button
      class="bg-blue-500 text-white w-full border px-5 py-2 rounded-xl shadow-md hover:opacity-90"
      (click)="this.btnClicked.emit()"
    >
      {{ label() }}
    </button>
  `,
})
export class PrimaryButtonComponent {
  label = input('');
  btnClicked = output();
}
