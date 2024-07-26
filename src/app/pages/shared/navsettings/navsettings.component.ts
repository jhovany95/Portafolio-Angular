import { Component, HostBinding, signal } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { DarkModeService } from '../../../services/dark-mode.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navsettings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navsettings.component.html',
  styleUrl: './navsettings.component.scss'
})
export class NavsettingsComponent {

  
  darkMode = signal<boolean>(false);
  language = signal<string>('ES'); 
  
  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  }

  toggleDarkMode(check:boolean) {
    this.darkModeService.toggleDarkMode(check);
  }

  ngOnInit() {
    // Suscribirse a cambios de idioma
    this.languageService.language$.subscribe((lang) => {
      this.language.set(lang); // Actualiza el idioma actual
    });
  }
  changeLanguage(lang: string) {
    this.languageService.setLanguage(lang); // Cambia el idioma en el servicio
  }


  constructor(private languageService: LanguageService, private darkModeService: DarkModeService) { }
  
}
