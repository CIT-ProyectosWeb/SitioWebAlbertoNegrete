import { Routes } from '@angular/router';
import { Index } from './pages/index';
import { Nosotros } from './pages/nosotros/nosotros';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
    {path: '', component: Index},
    {path: 'nosotros', component: Nosotros},
    {path: 'contacto', component: Contacto}
];
