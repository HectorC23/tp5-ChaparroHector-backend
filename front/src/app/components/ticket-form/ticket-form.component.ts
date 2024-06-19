import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketeroService } from '../../services/ticketero.service';
import { TicketsComponent } from '../tickets/tickets.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [FormsModule, TicketsComponent,CommonModule],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.css'
})
export class TicketFormComponent implements OnInit {

  ticket!: Ticket;
  accion: string = "new";

  expectador: string = "";
  pCobrado: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private router:Router, private ticketeroService:TicketeroService ){
    this.iniciarVariable();
}

  //ONINIT
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['dni'] == undefined){
        this.accion = "new";
      }else{
        this.accion = "update";
        this.cargarTicket(params['dni']);
      }
  })};

  // INSTANCIAR
  iniciarVariable():void {
    this.ticket = new Ticket();
  }

  // COMPRAR
  registrarticket():void {
    this.ticketeroService.add(this.ticket);
    this.router.navigate(['tickets']);
    
  }

  cargarTicket(dni:number):void{
    this.ticket = this.ticketeroService.getTicketByDni(dni);
  }


  actualizarticket():void{
    this.ticketeroService.update(this.ticket);
    this.router.navigate(['tickets']);
  }




  //MODULO ONCHANGE
  captarCambio():void{
    this.pCobrado = 0;
    let selectExpectador = document.getElementById("expectador") as HTMLInputElement;
    this.expectador = selectExpectador.value;

    let inputPReal = document.getElementById("p-real") as HTMLInputElement;
    if (this.expectador == "l") {
      this.pCobrado = (Number(inputPReal.value) * 0.80)
    } else {
      this.pCobrado = Number(inputPReal.value);
    }

    console.log(selectExpectador);
    console.log(this.expectador);
    
  }

}
