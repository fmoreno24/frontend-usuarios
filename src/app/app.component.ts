import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsuariosService, Usuario } from './services/usuarios.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'frontend-usuarios';
  usuarios: Usuario[] = [];
  nuevoUsuario: Usuario = { nombre: '', email: '', edad: 0 };

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.usuariosService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }

  registrarUsuario() {
    this.usuariosService.crearUsuario(this.nuevoUsuario).subscribe(() => {
      this.nuevoUsuario = { nombre: '', email: '', edad: 0 };
      this.cargarUsuarios();
    });
  }
}
