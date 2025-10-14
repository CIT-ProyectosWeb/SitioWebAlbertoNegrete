import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";

@Component({
  selector: 'app-index',
  standalone: true,
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  imports: [Navbar]
})
export class IndexComponent {

}
