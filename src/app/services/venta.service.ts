import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Venta } from '../interfaces/venta';
import { ResponseApi } from '../interfaces/response-api';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  private urlApi:string = environment.endpoint + 'Venta/';

  constructor(private http:HttpClient) { }

  registrar(request:Venta):Observable<ResponseApi>{
    return this.http.post<ResponseApi>(`${this.urlApi}Registrar`, request)
  }

  historial(buscarPor:string,numeroVenta:string,fechaInicio:string,fechaFin:string):Observable<ResponseApi>{
    return this.http.get<ResponseApi>(`${this}Historial?buscarPor=${buscarPor}&numeroVenta=${numeroVenta}&fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`)
  }

  reporte(fechaInicio:string,fechaFin:string):Observable<ResponseApi>{
    return this.http.get<ResponseApi>(`${this}Reporte?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`)
  }
}
