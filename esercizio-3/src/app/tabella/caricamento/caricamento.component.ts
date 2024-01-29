import { Component } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@Component({
  selector: 'caricamento',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './caricamento.component.html',
  styleUrl: './caricamento.component.css'
})
export class CaricamentoComponent {

}
