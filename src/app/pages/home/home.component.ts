import { CommonModule } from '@angular/common';
import { Component, HostBinding, signal } from '@angular/core';
import { profile, navigation, basicData, basicDataLang, navigationLang,whatIdo, whatIdoLang, education, experience } from '../../models/profile.module';
import { LanguageService } from '../../services/language.service';
import { DarkModeService } from '../../services/dark-mode.service';
import { NavsettingsComponent } from '../shared/navsettings/navsettings.component';
import { ProfileComponent } from '../shared/profile/profile.component';
import { NavigationComponent } from '../shared/navigation/navigation.component';
import { ResumeComponent } from '../resume/resume.component';
import { DefaultContentComponent } from '../default-content/default-content.component';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,NavsettingsComponent,ProfileComponent,NavigationComponent,ResumeComponent,DefaultContentComponent,RouterOutlet,NgxPaginationModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  
})
export class HomeComponent {
  translations: any;
  basicDataTrad: any;
  
  language = signal<string>('ES');

  whatIdoTrad: whatIdo[] = [];
  currentSection = signal<string>('Home');
  name = signal<string>('Jhovany Quintana');
  description = signal<string>('FullStack Developer');
  movil = signal<string>('+34 667 844 617');
  location = signal<string>('Madrid, España');
  mail = signal<string>('Jhovanyquintana1995@gmail.com');
  birthday = signal<string>('02/11/1995');
  github = signal<string>('https://github.com/jhovany95');
  linkedin = signal<string>('https://www.linkedin.com/in/jhovany-quintana-66aaa0162/');
  aboutMe = signal<string>('Ingeniero en Sistemas especializado en desarrollo de software, con más de 5 años de experiencia en el desarrollo web con tecnologías como AngularJS, HTML, JavaScript, Python, APIs RESTful y frameworks CSS como Tailwind y Bootstrap. Enfocado en la generación de código limpio y mantenible. ');
  





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

  navigation(item:string){
    this.currentSection.set(item);
  }

  @HostBinding('class.dark') get mode() {
    return this.darkModeService.isDarkMode();
  }

  constructor(private languageService: LanguageService,private darkModeService: DarkModeService) { 
 

  }
  
}
