import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-casos-exito',
  standalone: true,
  imports: [Navbar, Footer],
  templateUrl: './casos-exito.html',
  styleUrls: ['./casos-exito.css']
})
export class CasosExito implements AfterViewInit {
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
      { threshold: 0.2 }
    );

    const elements = this.el.nativeElement.querySelectorAll('.fade-up');
    elements.forEach((el: HTMLElement) => observer.observe(el));
  }
}
