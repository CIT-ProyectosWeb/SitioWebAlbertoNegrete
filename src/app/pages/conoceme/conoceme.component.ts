import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-conoceme',
  imports: [Navbar, Footer],
  templateUrl: './conoceme.html',
  styleUrl: './conoceme.css'
})
export class Conoceme {

}
