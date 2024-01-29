import { Component } from '@angular/core';
import { LikeComponent } from './like/like.component';

@Component({
  selector: 'tabella',
  standalone: true,
  imports: [LikeComponent],
  templateUrl: './tabella.component.html',
  styleUrl: './tabella.component.css'
})
export class TabellaComponent {
  nome1: string = "meme su Gerry Scotti"
  nome2: string = "Burning Paper"
  Descrizione1: string = "questo meme ha come protagonista uno dei più famosi conduttori televisivi italiani, noto per le sue espressioni facciali molto usate sul web per creare i meme."
  Descrizione2: string = "In questo meme, si vede SpongeBob leggere un documento con un po' di scherno prima di bruciarlo senza voltarsi indietro. Questo esempio dimostra solo la mancanza di interesse di alcuni individui per qualsiasi cosa."
}
