import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Servicios } from './pages/servicios/servicios';
import { Paquetes } from './pages/paquetes/paquetes';
import { Conocenos } from './pages/conocenos/conocenos';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
    {
        path: 'home', component: Home   //parh ruta componente es el que nos redirige
    },
    
    {
        path: 'servicios', component: Servicios   //parh ruta componente es el que nos redirige
    },

    {
        path: 'paquetes', component: Paquetes   //parh ruta componente es el que nos redirige
    },
    
    {
        path: 'conocenos', component: Conocenos   //parh ruta componente es el que nos redirige
    },

    {
        path: 'contacto', component: Contacto   //parh ruta componente es el que nos redirige
    },

    {
        path: '**', pathMatch: 'full', redirectTo: 'home'   //principal
    },
    
    

];
