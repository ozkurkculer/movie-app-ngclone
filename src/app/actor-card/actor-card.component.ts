import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-actor-card',
  standalone: true,
  imports: [],
  templateUrl: './actor-card.component.html',
  styleUrl: './actor-card.component.css'
})
export class ActorCardComponent {
  @Input() cast: Array<any> = []; 
}
