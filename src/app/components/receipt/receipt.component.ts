import { Component, Input, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss'],
})
export class ReceiptComponent implements OnInit {
  @Input() product: ProductInterface = {
    cover: 'assets/images/placeholder.jpg',
  };

  header!: any;
  receipt!: any;

  constructor() {}

  ngOnInit(): void {
    // console.log('rceipt');
  }

  ngAfterViewInit(): void {
    this.header = document.querySelector('[data-js="header"]');
    this.receipt = document.querySelector('[data-js="receipt"]');

    this.setReceiptOffset();

    document.addEventListener('scroll', () => {
      this.setReceiptOffset();
    });

    this.header.addEventListener('mouseenter', () => {
      this.setReceiptOffset();
    });

    this.header.addEventListener('mouseleave', () => {
      this.setReceiptOffset();
    });
  }

  public setReceiptOffset() {
    this.receipt.style.cssText = `
        top: ${parseFloat(this.header.clientHeight) + 'px'};
    `;
  }
}
