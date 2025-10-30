import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-casos-exito',
  standalone: true,
  imports: [Navbar, Footer],
  templateUrl: './casos-exito.html',
  styleUrls: ['./casos-exito.css']
})
export class CasosExito {

}
