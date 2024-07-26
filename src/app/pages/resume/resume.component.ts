import { CommonModule } from '@angular/common';
import { Component, HostBinding, signal } from '@angular/core';
import { education, experience, whatIdo, whatIdoLang, workingSkills } from '../../models/profile.module';
import { LanguageService } from '../../services/language.service';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {

  studiesTrad: any;
  experiencesTrad:any;
  resumeDataTrad:any;
  knowledgesTrad:any;
  



  skillsData: workingSkills[] = [
    { name: "Python", porcentaje: "80%" },
    { name: "TypeScript", porcentaje: "75%" },
    { name: "JavaScript", porcentaje: "75%" },
    { name: "Angular", porcentaje: "70%" },
    { name: "HTML", porcentaje: "90%" },
    { name: "CSS", porcentaje: "85%" },
    { name: "PHP", porcentaje: "40%" },
    { name: "Asp Classic", porcentaje: "90%" }
  ];



  @HostBinding('class.dark') get mode() {
    return this.darkModeService.isDarkMode();
  }

  ngOnInit() {
    this.languageService.language$.subscribe(() => {
      this.updateTranslations(); // Actualiza cuando el idioma cambia
    });

    this.updateTranslations(); // Carga las traducciones iniciales
  }

  updateTranslations() {
    const translations = this.languageService.getTranslationData();
    this.studiesTrad = translations.studiesTrad; 
    this.experiencesTrad = translations.experiencesTrad;
    this.resumeDataTrad = translations.resumeDataTrad; 
    this.knowledgesTrad = translations.knowledgesTrad;
    // Obtiene datos de traducción para 'basicData'
  }
  
  constructor(private languageService: LanguageService,private darkModeService: DarkModeService) { 
    // Establecer el perfil de acuerdo al idioma seleccionado
    //this.basicDataTrad = this.basicDataTrads[this.language()];
    //this.navigationTrad = this.navigationTrads[this.language()];
    //this.whatIdoTrad = this.whatIdoTrads[this.language()];
    

  }


}
