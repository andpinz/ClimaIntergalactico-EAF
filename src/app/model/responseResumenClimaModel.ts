import { Civilizacion } from "./civilizacionModel";
import { ResumenClimaPorAnio } from "./resumenClimaPorAnioModel";

export interface ResponseResumenClima {
    civilizacion: Civilizacion;
    periodosSequiaTotal;
	periodosLluviaTotal;
	periodosOptimosTotal;
    listaResumenAnual: ResumenClimaPorAnio[];
}