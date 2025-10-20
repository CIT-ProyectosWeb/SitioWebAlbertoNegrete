import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [Navbar, Footer],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = this.el.nativeElement.querySelectorAll('.fade-up');
    elements.forEach((el: HTMLElement) => observer.observe(el));
  }
}
