import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductoComponent } from '../producto/producto.component';
import { ProductoService } from '../../services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-producto-form',
  standalone: true,
  imports: [FormsModule,CommonModule, ProductoComponent],
  templateUrl: './producto-form.component.html',
  styleUrl: './producto-form.component.css'
})
export class ProductoFormComponent implements OnInit{

  Producto!: Producto;


  accion: string = "new";



  constructor(private activatedRoute: ActivatedRoute, private router:Router, private productoService:ProductoService ){
    this.iniciarVariable();
}


//ONINIT
ngOnInit(): void {
  this.activatedRoute.params.subscribe(params => {
    if (params['id'] == undefined){
      
      
      this.accion = "new";
    }else{
      this.accion = "update";
      console.log(params['id']);
      this.cargarProducto(params['id']);
    }
})};


// INSTANCIAR
iniciarVariable():void {
  this.Producto = new Producto();
}


registrar():void {
  this.productoService.add(this.Producto).subscribe(
    (result) => {
      console.log(result);
      
      if (result.status == 1) {
        alert("Producto Cargado")
        this.router.navigate(['home']);
      }
    },
    error =>{
      console.log(error)
  }
  );
  this.Producto = new Producto();
}



cargarProducto(id:string):void{
  this.productoService.getProductoById(id).subscribe(
    (result) => {
     Object.assign(this.Producto,result);
    }, 
    error =>{
      console.log(error)
  }
  );
  this.Producto = new Producto();
}


actualizar(){
  this.productoService.update(this.Producto).subscribe(
    (result) => {
      console.log(result);
      
      if (result.status == 1) {
        alert("Producto Actualizado")
        this.router.navigate(['home']);
      }
    },
    error =>{
      console.log(error)
  }
  );
  this.Producto = new Producto();
}




// COMPRAR
// registrar():void {
//   this.productoService.add(this.ticket);
//   this.router.navigate(['tickets']);
  
// }



// cargarTicket(dni:number):void{
//   this.Producto = this.productoService.getTicketByDni(dni);
// }




}
