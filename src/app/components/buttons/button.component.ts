import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'primary-button',
  template: `<button
    [type]="type"
    (click)="onClick()"
    [disabled]="isDisabled"
    class="bg-orange rounded-full py-2 px-8 text-white hover:bg-dark-orange"
  >
    <span>{{ buttonText }}</span>
  </button>`,
})
export class ButtonComponent {
  buttonText: string = '';

  @Input()
  set text(name: string) {
    this.buttonText = name;
  }
  get name(): string {
    return this.buttonText;
  }
  @Input() color: string = '0068B4';
  @Input() type: string = 'button';
  @Input() isDisabled = false;
  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }
}
