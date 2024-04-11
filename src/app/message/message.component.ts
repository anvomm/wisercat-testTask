import {
  Component,
  Input,
  SimpleChanges,
  OnChanges,
  HostBinding,
} from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  imports: [CommonModule],
})
export class MessagesComponent implements OnChanges {
  bgColor = '';
  textColor = '';

  @Input() text!: string;
  @Input() type!: string;

  @HostBinding('attr.style')
  public get cssVars() {
    return `
    --switch-color: ${this.bgColor};
  `;
  }

  ngOnChanges(changes: SimpleChanges) {
    const currentType = changes['type'].currentValue;
    this.setColors(currentType);
  }

  setColors(type: string) {
    switch (type) {
      case 'error':
        this.bgColor = '#e53935';
        this.textColor = '#fff';
        break;
      case 'success':
        this.bgColor = ' #4caf50';
        this.textColor = '#fff';
        break;
      case 'info':
        this.bgColor = '#2196f3';
        this.textColor = '#fff';
        break;

      default:
        break;
    }
  }
}

export enum Type {
  error,
  success,
  info,
}
