import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { ResponseResumenClima } from '../model/responseResumenClimaModel';
import { RestService } from '../services/rest.service';
import { Constantes } from '../shared/constantes';


@Component({
  selector: 'app-resumen-clima',
  templateUrl: './resumen-clima.component.html',
  styleUrls: ['./resumen-clima.component.css']
})
export class ResumenClimaComponent implements OnInit {
  displayedColumns: string[] = ['Año', 'Periodos Sequia', 'Periodos LLuvia', 'Pico de lluvia por año', 'Periodos condición óptima'];
  listaAnios = [
    { valor: '1', muestraValor: '1 Año' },
    { valor: '5', muestraValor: '5 Años' },
    { valor: '10', muestraValor: '10 Años' },
    { valor: '20', muestraValor: '20 Años' }];

  listaResponseResumenClima: ResponseResumenClima[];
  anio;

  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor(public restService: RestService,) {
    this.anio = '';
  }

  ngOnInit(): void {
  }

  calcularClima() {

    if (this.anio !== undefined && this.anio !== null && this.anio !== '') {
      try {

        this.restService.getREST(Constantes.urlCalcularClima+this.anio).subscribe(resp => {
          this.listaResponseResumenClima = JSON.parse(JSON.stringify(resp));

        },
          error => {
            console.log(error, "error");
          })
      } catch (e) {
        console.log(e);
      };
    }
  }

}
