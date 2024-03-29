import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css',
  //styles: [' p{background-color:yellow;}   ']
})
export class EmpleadoComponent implements OnInit {
  
  private nombre = 'Pepe';
  private apellido = 'Argento';
  private edad = 45;
  //private empresa = 'Telefonica';

  //Metodos get

  getNombre(){
    return this.nombre;
  }
  getApellido(){
    return this.apellido;
  }

  getEdad(){
    return this.edad;
  }
  
  /*
  getEmpresa(){
    return this.empresa;
  } */
  
  habilitarInput = false;
  usuarioRegistro = false;
  textoDeRegistro = 'No hay nadie registrado';

  getRegistroUsuario(){
    this.usuarioRegistro = false;
  }

  setUsuarioRegistrado(){
    this.textoDeRegistro = 'El usuario se acaba de registrar';
  }
  

  constructor(){}

  ngOnInit(): void {
    
  }

}
