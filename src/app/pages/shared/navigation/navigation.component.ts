import { Component, signal } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule,RouterOutlet],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  language = signal<string>('ES'); 
  navigationTrad:any;
  currentSection = signal<string>('Home');


  ngOnInit() {
    this.languageService.language$.subscribe(() => {
      this.updateTranslations(); // Actualiza cuando el idioma cambia
    });

    this.updateTranslations(); // Carga las traducciones iniciales
  }

  updateTranslations() {
    const translations = this.languageService.getTranslationData();
    this.navigationTrad = translations.navigationTrad; // Obtiene datos de traducción para 'basicData'
  }

  constructor(private languageService: LanguageService) { }
}
