import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DocsComponent } from './pages/docs/docs.component';
import { NavsettingsComponent } from './pages/shared/navsettings/navsettings.component';
import { DefaultContentComponent } from './pages/default-content/default-content.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ConctactComponent } from './pages/conctact/conctact.component';

export const routes: Routes = [

    
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: '', component: DefaultContentComponent }, 
            { path: 'resume', component: ResumeComponent },
            { path: 'projects', component: ProjectsComponent },
            {path: 'contact', component: ConctactComponent}
        ]
    },
    {
        path: 'docs',
        component: DocsComponent
    },
    {
        path: '**', // Catch-all for invalid routes
        redirectTo: 'home'
    }
];
