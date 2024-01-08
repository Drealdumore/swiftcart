import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void => *', animate('1000ms ease-in')),
      transition('* => void', animate('1000ms ease-in')),
    ]),
  ],
})
export class ProductComponent {
  @Input() products: IProduct[] = [];
  @Input() loading: boolean = true;
}
