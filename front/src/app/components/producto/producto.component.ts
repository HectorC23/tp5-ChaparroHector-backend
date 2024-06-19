import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  productos!: Array<any>;
  destacados!: Array<any>;

  // carrito = {

  //   arrayCarrito: [] as Producto[],
  //   total: 0,
  //   cont: 0,

  //   carrito(){
  //   },

  //   sumartotal(p: Producto){
  //     this.total += p.precio;
  //     this.total = Number(this.total.toFixed(2));
  //     this.cont++;
  //   },

  //   restarTotal(p: Producto){
  //     this.total -= p.precio;
  //     this.total = Number(this.total.toFixed(2));
  //     this.cont--;
  //   }
  // }

  constructor( private productoService: ProductoService, private router:Router){ 
    this.obtenerProductos();
  }

  

  obtenerProductos() {
    
    this.productoService.getProductos().subscribe(
      
      data => {
        this.productos = data;
        console.log(this.productos);
        
    },
    error =>{
      console.log(error)
    }
  )
  }

  obtenerDestacados() {
    
    this.productoService.getProductosDestacados().subscribe(
      
      data => {
        this.destacados = data;
        console.log(this.productos);
        
    },
    error =>{
      console.log(error)
    }
  )
  }

  agregar(){
    this.router.navigate(['producto-form']);
  }

  modificar(id: string){
    this.router.navigate(['producto-form', id]);
  }



  eliminar(id:string){
    this.productoService.deleteProducto(id).subscribe(
      
      (result) => {
        console.log(result);
        
        if (result.status == 1) {
          alert("Producto eliminado Correctamente")
          this.obtenerProductos();
        }
      },
      error =>{
        console.log(error)
    }
    );
  }




  // agregarcarrito = (p: Producto) => {
  //   if (!this.carrito.arrayCarrito.find(e => e == p)) {
  //     p.stock++;
  //     this.carrito.arrayCarrito.push(p);
  //     this.carrito.sumartotal(p);
  //   } else if (this.carrito.arrayCarrito.find(e => e == p)) {
  //     this.carrito.arrayCarrito.forEach(e => {
  //       if (e == p) {
  //         e.stock++;
  //         this.carrito.sumartotal(p);
  //       }
  //     });
  //   }
  // }

  // descontar = (p:Producto) => {
  //   if (this.carrito.arrayCarrito.find(e => e == p)) {

  //     if (this.carrito.arrayCarrito.find(e => e == p)?.stock == 1) {

  //       this.carrito.arrayCarrito = this.carrito.arrayCarrito.filter(e => e !== p);

  //       if(this.carrito.arrayCarrito.length == 0) {
  //         this.carrito.total = 0;
  //       }

  //       this.carrito.restarTotal(p);
        

  //     } else {

  //       this.carrito.arrayCarrito.forEach(e => {
  //         if (e == p) {
  //           e.stock--;
  //           this.carrito.restarTotal(p);
  //         }

  //       });
  //     }
  //   }
  // }


}
