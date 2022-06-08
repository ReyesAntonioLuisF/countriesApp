import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  hayError: boolean = false;
  paises: Country[] = [];
  termino: string = '';

  constructor(private paisService: PaisService) { }

  buscar(termino: string){
    this,this.hayError = false;
    this.termino = termino
    
    this.paisService.buscarPaisPorCapital(this.termino)
      .subscribe( paises => {
        this.paises = paises;
      }, (error) => {
        this.paises = [];
        this.hayError= true;
      })
  }

  sugerencias (termino: string){
    this.hayError=false;
  }

}
