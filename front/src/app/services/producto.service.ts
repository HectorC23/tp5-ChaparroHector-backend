import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  arrayProductos: Producto[] = [];

  constructor(private _http: HttpClient) { }

  public getProductos():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
  return this._http.get('http://localhost:3000/api/producto', httpOptions);
  }

  //TESTEO
  public getProductosDestacados():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
  return this._http.get('http://localhost:3000/api/producto/?destacado=true', httpOptions);
  }


  //CRUD

  //AD
  public add(producto: Producto):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }

  let body:any = JSON.stringify(producto);
  console.log(body);
  return this._http.post('http://localhost:3000/api/producto',body, httpOptions);
  }



  // UPDATE
  public update(p: Producto):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }

  let body:any = JSON.stringify(p);
  return this._http.put('http://localhost:3000/api/producto/'+p._id,body, httpOptions);
  }



  getProductoById(id: string):Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this._http.get('http://localhost:3000/api/producto/'+id, httpOptions);
  }



  deleteProducto(id:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this._http.delete('http://localhost:3000/api/producto/'+id, httpOptions);
  }











}
