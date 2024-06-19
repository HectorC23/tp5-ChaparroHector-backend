import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketeroService {

  arrayTickets: Array<Ticket>;
  
  // CONSTRUCTOR // INSTANCIANDO
  constructor() { 
    this.arrayTickets = new Array<Ticket>();

    let e = new Ticket();
    e.dni = 42953938;
    e.precioReal = 500;
    e.tipoExpectador = "e";
    e.fechaCobro = new Date();
    e.precioCobrado = 500;
    this.arrayTickets.push(e);

    let p = new Ticket();
    p.dni = 41589687;
    p.precioReal = 1500;
    p.tipoExpectador = "l";
    p.fechaCobro = new Date();
    p.precioCobrado = 1500*0.80;
    this.arrayTickets.push(p);
  } 


  // CRUD
  // CREATE
  add(tick: Ticket):void{
    if (tick.tipoExpectador == "l") {
      tick.precioCobrado = tick.precioReal * 0.80;
    } else {
      tick.precioCobrado = tick.precioReal;
    }
    this.arrayTickets.push(tick);
  }

  // UPDATE
  update(tick: Ticket):void{
    this.arrayTickets.map(e => {
      if(e.dni == tick.dni){
        e.precioReal = tick.precioReal;
        e.tipoExpectador = tick.tipoExpectador;
        if (e.tipoExpectador == "l") {
          e.precioCobrado = tick.precioReal * 0.80;
        } else {
          e.precioCobrado = tick.precioReal;
        }
      }
    })
  }


  // RETURN ARRAY
  getTickets():Array<Ticket>{
    return this.arrayTickets;
  }


  // RETURN TICKET
  getTicketByDni(dni: number):Ticket{
    let ticket = new Ticket();
    let indexTicket:number = this.arrayTickets.findIndex(t => (t.dni == dni));
    ticket = this.arrayTickets[indexTicket];
    return ticket;
  }

  // DELETE TICKET
  deleteTicket(dni: number){
    let aux = this.arrayTickets.filter(t => t.dni!= dni);
    this.arrayTickets = aux;
    return aux;
  }

}
