import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { Contacto } from './pages/contacto/contacto.component';
import { Servicios } from './pages/servicios/servicios.components';
import { Conoceme } from './pages/conoceme/conoceme.component';
import { CasosExito } from './pages/casos-exito/casos-exito.component';

export const routes: Routes = [
    {path: '', component: IndexComponent},
    {path: 'contacto', component: Contacto},
    {path: 'servicios', component: Servicios},
    {path: 'conoceme', component: Conoceme},
    {path: 'casosExito', component: CasosExito},
];
