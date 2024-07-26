import { Component, NgModule, ChangeDetectionStrategy  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsService } from '../../services/projects.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule, PaginationInstance } from 'ngx-pagination';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [HttpClientModule,CommonModule,NgxPaginationModule],
  providers: [ProjectsService],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',

})
export class ProjectsComponent {

  projects: any[] = [];
  page: number = 1;
  currentLanguage: string = 'ES';

  public config: PaginationInstance = {
    id: 'projects',
    itemsPerPage: 4,
    currentPage: 1
};

  constructor(private ProjectsService: ProjectsService, private LanguageService: LanguageService) { }

  ngOnInit(): void {
    this.ProjectsService.getProjects().subscribe(data => {
      this.projects = data;
    });
  // Subscribe to language changes
  this.LanguageService.language$.subscribe((lang) => {
  this.currentLanguage = lang;
  });
}

getProjectTitle(project: any): string {
return this.currentLanguage === 'ES' ? project.titleES : project.title;
}

getProjectDescription(project: any): string {
  return this.currentLanguage === 'ES' ? project.descriptionES : project.description;
}

}
