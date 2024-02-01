import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButton, MatButtonModule} from '@angular/material/button';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'like',
  standalone: true,
  imports: [MatProgressBarModule,MatButtonModule],
  templateUrl: './like.component.html',
  styleUrl: './like.component.css'
})
export class LikeComponent {
  like = 0;

  constructor(){
    this.like = Math.floor(Math.random()*100)
    this.Colore();
  }

  clickbottone(){
    if (this.like<100){
      this.like = this.like+1
    }
  }

  Colore(): string{
    if (this.like <33){
      return "primary";
    }
    else if (this.like >= 33 && this.like <66){
      return "accent";
    }else{
      return "warn";
    }
    }

  }
