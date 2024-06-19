export class Ticket {

    dni: number;
    precioReal: number;
    tipoExpectador: string;
    fechaCobro: Date;
    precioCobrado: number;


    constructor(){
        this.dni = 0;
        this.precioReal = 0;
        this.tipoExpectador = "";
        this.fechaCobro = new Date();
        this.precioCobrado = 0;
    }
    constructor1(dni: number,precioReal:number, tipoExpectador:string,fechaCobro:Date,precioCobrado:number){
        this.dni = dni;
        this.precioReal = precioReal;
        this.tipoExpectador = tipoExpectador;
        this.fechaCobro = fechaCobro;
        this.precioCobrado = precioCobrado;
    }

    public getDni(): number {
        return this.dni;
    }

    public setDni(dni: number): void {
        this.dni = dni;
    }

    public getPrecioReal(): number {
        return this.precioReal;
    }

    public setPrecioReal(precioReal: number): void {
        this.precioReal = precioReal;
    }

    public getTipoEspectador(): string {
        return this.tipoExpectador;
    }

    public setTipoEspectador(tipoEspectador: string): void {
        this.tipoExpectador = tipoEspectador;
    }

    public getFechaCobro(): Date {
        return this.fechaCobro;
    }

    public setFechaCobro(fechaCobro: Date): void {
        this.fechaCobro = fechaCobro;
    }

    public getPrecioCobrado(): number {
        return this.precioCobrado;
    }

    public setPrecioCobrado(precioCobrado: number): void {
        this.precioCobrado = precioCobrado;
    }







   




}