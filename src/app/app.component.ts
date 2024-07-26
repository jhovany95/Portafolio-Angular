import { Component, HostBinding } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterOutlet,Routes } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { DarkModeService } from './services/dark-mode.service';
import { NgxCaptchaModule } from 'ngx-captcha';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgxCaptchaModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Portafolio - Jhovany Quintana';

  ngOnInit(): void {
    initFlowbite();
  }

  @HostBinding('class.dark') get mode() {
    return this.darkModeService.isDarkMode();
  }
  
  constructor(private darkModeService: DarkModeService) { }
}
