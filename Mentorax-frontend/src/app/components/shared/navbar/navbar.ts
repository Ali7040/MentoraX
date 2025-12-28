import { Component } from '@angular/core';
import { LucideAngularModule, Sparkles } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.sass',
})
export class Navbar {
  readonly Sparkles = Sparkles;
}
