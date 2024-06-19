import { Component } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { TicketeroService } from '../../services/ticketero.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {

  arrayTickets!: Array<Ticket>;
  contExpectadores = 0;
  contTotal = 0;

  constructor( private ticketeroService:TicketeroService, private router:Router  ) { 
    this.obtenerTickets();
  }


  ngOnInit() {
  }
 
  // CARGAR TICKETS
  obtenerTickets(){
    this.arrayTickets = this.ticketeroService.getTickets();
  }

  // AGREGAR TICKET
  agregar(){
    this.router.navigate(['ticket-form']);
  }

  // UPDATE TICKET
  actualizar(dni: number):void{
    this.router.navigate(['ticket-form', dni]);
  }

  // DELETE TICKET
  eliminar(dni:number):void{
    console.log(this.ticketeroService.deleteTicket(dni));
    this. arrayTickets = this.ticketeroService.deleteTicket(dni);
    
    this.router.navigate(['tickets']);
  }


  //MODULO CONTAR POR FILTRO
  contarExpectadores(){
    this.contTotal = 0;
    let ex = (document.getElementById("filtro") as HTMLInputElement).value;
    this.contExpectadores = this.arrayTickets.filter(t => t.tipoExpectador == ex.toLocaleLowerCase()).length;
    this.arrayTickets.forEach(t => {
      if (t.tipoExpectador == ex.toLowerCase()) {
        this.contTotal = this.contTotal + t.precioCobrado;
      }
    });
  }

}
