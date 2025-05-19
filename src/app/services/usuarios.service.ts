import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Usuario {
  id?: string;
  nombre: string;
  email: string;
  edad: number;
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private API_URL = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.API_URL);
  }

  crearUsuario(usuario: Usuario): Observable<any> {
    return this.http.post(this.API_URL, usuario);
  }
}
