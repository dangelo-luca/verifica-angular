import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'like',
  standalone: true,
  imports: [MatProgressBarModule,MatButtonModule],
  templateUrl: './like.component.html',
  styleUrl: './like.component.css'
})
export class LikeComponent {


  like = Math.floor(Math.random()*10)

  
  

}
