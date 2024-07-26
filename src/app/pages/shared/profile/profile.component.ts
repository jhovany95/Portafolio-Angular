import { Component, signal } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  translations: any;
  basicDataTrad: any;

  name = signal<string>('Jhovany Quintana');
  description = signal<string>('FullStack Developer');
  movil = signal<string>('+34 667 844 617');
  location = signal<string>('Madrid, España');
  mail = signal<string>('Jhovanyquintana1995@gmail.com');
  birthday = signal<string>('02/11/1995');
  github = signal<string>('https://github.com/jhovany95');
  linkedin = signal<string>('https://www.linkedin.com/in/jhovany-quintana-66aaa0162/');
  aboutMe = signal<string>('Ingeniero en Sistemas especializado en desarrollo de software, con más de 5 años de experiencia en el desarrollo web con tecnologías como AngularJS, HTML, JavaScript, Python, APIs RESTful y frameworks CSS como Tailwind y Bootstrap. Enfocado en la generación de código limpio y mantenible.');
  

  ngOnInit() {
    this.languageService.language$.subscribe(() => {
      this.updateTranslations(); // Actualiza cuando el idioma cambia
    });

    this.updateTranslations(); // Carga las traducciones iniciales
  }

  updateTranslations() {
    const translations = this.languageService.getTranslationData();
    this.basicDataTrad = translations.basicDataTrad; // Obtiene datos de traducción para 'basicData'
  }


  constructor(private languageService: LanguageService) { }
}
