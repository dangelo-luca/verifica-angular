import { Component } from '@angular/core';
import { LikeComponent } from './like/like.component';
import { CaricamentoComponent } from './caricamento/caricamento.component';

@Component({
  selector: 'tabella',
  standalone: true,
  imports: [LikeComponent,CaricamentoComponent],
  templateUrl: './tabella.component.html',
  styleUrl: './tabella.component.css'
})
export class TabellaComponent {
  meme = [
    {
      Nome1: "meme su Gerry Scotti",
      Descrizione1:"questo meme ha come protagonista uno dei più famosi conduttori televisivi italiani, noto per le sue espressioni facciali molto usate sul web per creare i meme."
    },
    {
      Nome2:"Burning Paper",
      Descrizione2:"In questo meme, si vede SpongeBob leggere un documento con un po' di scherno prima di bruciarlo senza voltarsi indietro. Questo esempio dimostra solo la mancanza di interesse di alcuni individui per qualsiasi cosa."

    }
  ]
  }

