import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: 'light' | 'dark' = 'light'; // Default theme

  // Getter for the current theme
  getCurrentTheme(): string {
    return this.theme;
  }

  // Toggle theme dynamically for a specific container or page
  toggleTheme(theme: 'light' | 'dark', containerId: string): void {
    this.theme = theme;

    // Apply theme class to the container with the given ID (e.g., `login-container`)
    const container = document.getElementById(containerId);
    if (container) {
      container.classList.remove('light-theme', 'dark-theme');
      container.classList.add(`${theme}-theme`);
    }
  }
}



