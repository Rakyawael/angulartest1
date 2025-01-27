import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css'],
})
export class PortfolioComponent {
  hiddenModel: boolean = true; 
  modelImg: string = ''; 
  modelAlt: string = '';
  imgsrc: { src: string; alt: string }[] = [
    { src: '../../../poetry1.png', alt: 'Portfolio 1' },
    { src: '../../../poetry2.png', alt: 'Portfolio  2' },
    { src: '../../../p3.png', alt: 'Portfolio  3' },
    { src: '../../../poetry1.png', alt: 'Portfolio  4' },
    { src: '../../../poetry2.png', alt: 'Portfolio  5' },
    { src: '../../../p3.png', alt: 'Portfolio  6' },
  ];
  openModal(img: { src: string; alt: string }): void {
    this.modelImg = img.src;
    this.modelAlt = img.alt;
  }

  closeModal(): void {
    this.hiddenModel = true;
  }
}
