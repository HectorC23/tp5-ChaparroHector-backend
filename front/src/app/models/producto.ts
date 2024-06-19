export class Producto {
    _id!:string;
    nombre: string;
    precio: number;
    descripcion: string;
    imagen: string;
    stock: number;
    destacado:boolean

    constructor(){
        this.nombre = "";
        this.precio = 0;
        this.descripcion = "";
        this.imagen = "";
        this.stock = 0;
        this.destacado = false;
    }
    
    

}
