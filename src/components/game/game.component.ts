import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  templateUrl: './game.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameComponent {
  readonly gameUrl = 'https://agent47-478.itch.io/mln131-game';
}
