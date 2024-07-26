import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  
  private jsonURL = 'assets/projects_ES.json';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<any> {
    return this.http.get(this.jsonURL);
  }
}
