import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  darkMode = signal<boolean>(false);

  toggleDarkMode(check:boolean) {
    this.darkMode.set(check);
  }

  isDarkMode() {
    return this.darkMode();
  }

  constructor() { }
}
