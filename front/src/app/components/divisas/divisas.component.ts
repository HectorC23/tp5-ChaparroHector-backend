import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DivisasService } from '../../services/divisas.service';
import { Divisa } from '../../models/divisa';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-divisas',
  standalone: true,
  imports: [CommonModule,FormsModule,DivisasComponent],
  templateUrl: './divisas.component.html',
  styleUrl: './divisas.component.css'
})
export class DivisasComponent {

  Divisa!: Array<any>;
  DivisaForm!: Divisa;
  DivisaForEmail!: Array<any>;

  constructor( private divisaService: DivisasService, private router:Router){ 
    this.iniciarVariable();
    this.obtenerDivisas();
  }


  iniciarVariable():void {
    this.DivisaForm = new Divisa();
  }

  obtenerDivisas() {
    
    this.divisaService.getDivisas().subscribe(
      
      data => {
        this.Divisa = data;
        
    },
    error =>{
      console.log(error)
    }
  )
  }

  obtenerDivisasByEmail(email: string) {
    
    this.divisaService.getDivisasEmail(email).subscribe(
      
      data => {
        this.DivisaForEmail = data;
        
    },
    error =>{
      console.log(error)
    }
  )
  }


  obtenerDivisasByType(tipo: string) {
    
    this.divisaService.getDivisasByType(tipo).subscribe(
      
      data => {
        this.DivisaForEmail = data;
        
    },
    error =>{
      console.log(error)
    }
  )
  }



  agregar(){
    this.router.navigate(['divisa-form']);
  }


  modificar(id: string){
    this.router.navigate(['divisa-form', id]);
  }


  eliminar(id:string){
    this.divisaService.delete(id).subscribe(
      
      (result) => {
        console.log(result);
        
        if (result.status == 1) {
          alert("Divisa eliminada Correctamente")
          this.obtenerDivisas();
        }
      },
      error =>{
        console.log(error)
    }
    );
  }








}
