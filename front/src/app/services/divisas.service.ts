import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Divisa } from '../models/divisa';

@Injectable({
  providedIn: 'root'
})
export class DivisasService {

  arrayDvisisas: Divisa[] = [];

  constructor(private _http: HttpClient) { }


  // GET DIVISAS
  public getDivisas():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
  return this._http.get('http://localhost:3000/api/divisa', httpOptions);
  }


  // GET TRANSACCIONES DE UN CLIENTE
  public getDivisasOrigenDestino(divisa:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
  return this._http.get('http://localhost:3000/api/divisa/?monedaOrigen='+divisa, httpOptions);
  }


  public getDivisasEmail(email:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
  return this._http.get('http://localhost:3000/api/divisa/?email='+email, httpOptions);
  }


  public getDivisasByType(tipo:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
  return this._http.get('http://localhost:3000/api/divisa/?monedaOrigen='+tipo, httpOptions);
  }


  //CRUD
//AD
public add(divisa: Divisa):Observable<any>{
  let httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  }

let body:any = JSON.stringify(divisa);
console.log(body);
return this._http.post('http://localhost:3000/api/divisa',body, httpOptions);
}


// UPDATE
public update(d: Divisa):Observable<any>{
  let httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  }

let body:any = JSON.stringify(d);
return this._http.put('http://localhost:3000/api/divisa/'+d._id,body, httpOptions);
}


getDivisaById(id: string):Observable<any>{

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  }
  return this._http.get('http://localhost:3000/api/divisa/'+id, httpOptions);
}


delete(id:string):Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  }
  return this._http.delete('http://localhost:3000/api/divisa/'+id, httpOptions);
}



















}
