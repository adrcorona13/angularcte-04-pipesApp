import { Component } from '@angular/core';
import { interval} from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Adrian';
  genero: string = 'm';

  invitacionMap = {
    'm': 'invitarlo',
    'f': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Adrian'];

  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarPersona(){
    if (this.nombre === 'Adrian') {
      this.nombre = 'Susana';
      this.genero = 'f';
    } else {
      this.nombre = 'Adrian';
      this.genero = 'm';
    }  
  }

  borrarCliente(){
    if (this.clientes.length == 0) {
      return;
    }
    this.clientes.pop();
  }

  // keyvalue pipe
  persona = {
    nombre: 'Adrian',
    edad: 33,
    direccion: 'cdmx'
  }

  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ]

  // async pipe
  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(()=>{
      resolve('Tenemos data de la promesa')
    }, 3500)
  });
}
