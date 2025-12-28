import { Component } from '@angular/core';
import { LucideAngularModule, Sparkles, ArrowRight, Play } from 'lucide-angular';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.sass',
})
export class HeroSection {
  readonly Sparkles = Sparkles;
  readonly ArrowRight = ArrowRight;
  readonly Play = Play;
}
