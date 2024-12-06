import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      class="text-black w-full px-5 py-2 rounded-xl shadow-md hover:bg-slate-100"
      (click)="this.btnClicked.emit()"
    >
      {{ label() }}
    </button>
  `,
})
export class ButtonComponent {
  label = input('');
  btnClicked = output();
}
