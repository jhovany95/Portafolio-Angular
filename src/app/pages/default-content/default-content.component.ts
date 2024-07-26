import { CommonModule } from '@angular/common';
import { Component, HostBinding, signal } from '@angular/core';
import { whatIdo, whatIdoLang } from '../../models/profile.module';
import { LanguageService } from '../../services/language.service';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-default-content',
  standalone: true,
  imports: [CommonModule
    
  ],
  templateUrl: './default-content.component.html',
  styleUrl: './default-content.component.scss'
})
export class DefaultContentComponent {


  language = signal<string>('ES');
  basicDataTrad: any;
  whatIdoTrad:any;

  //whatIdoTrad: whatIdo[] = [];




  ngOnInit() {
    this.languageService.language$.subscribe(() => {
      this.updateTranslations(); // Actualiza cuando el idioma cambia
    });

    this.updateTranslations(); // Carga las traducciones iniciales
  }

  updateTranslations() {
    const translations = this.languageService.getTranslationData();
    this.basicDataTrad = translations.basicDataTrad; 
    this.whatIdoTrad = translations.whatIdoTrad;
  }

  constructor(private languageService: LanguageService,private darkModeService: DarkModeService) { 

    

  }

}
