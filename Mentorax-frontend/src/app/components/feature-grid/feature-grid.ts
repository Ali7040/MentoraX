import { Component } from '@angular/core';
import { LucideAngularModule, Database, Brain, Network, CircleCheck } from 'lucide-angular';

@Component({
  selector: 'app-feature-grid',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './feature-grid.html',
  styleUrl: './feature-grid.sass',
})
export class FeatureGrid {
  readonly Database = Database;
  readonly Brain = Brain;
  readonly Network = Network;
  readonly CircleCheck = CircleCheck;
}
