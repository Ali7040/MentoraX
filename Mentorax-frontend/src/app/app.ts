import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/shared/navbar/navbar";
import { HeroSection } from "./components/hero-section/hero-section";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, HeroSection],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {
  protected title = 'Mentorax-frontend';
}
