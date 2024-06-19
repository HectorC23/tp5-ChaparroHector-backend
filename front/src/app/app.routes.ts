import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { DivisasComponent } from './components/divisas/divisas.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';

export const routes: Routes = [
    {
        path: 'header', component: HeaderComponent
    },
    {
        path: 'footer', component: FooterComponent
    },
    {
        path: 'home', component: ProductoComponent
    },
    {
        path: 'producto-form', component: ProductoFormComponent
    },
    {
        path: 'producto-form/:id', component: ProductoFormComponent
    },
    {
        path: 'divisas', component: DivisasComponent
    },
    {
        path: 'tickets', component: TicketsComponent
    },
    {
        path: 'ticket-form', component: TicketFormComponent
    },
    {
        path: 'ticket-form/:dni', component: TicketFormComponent
    }
];
