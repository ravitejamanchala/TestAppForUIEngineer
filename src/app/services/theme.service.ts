import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private defaultTheme = {
    background: '#e0e0e0',
    textPrimary: '#2a3447',
    cardshadow: '#e0e0e0',
    darkcardshadow: '#666666',
    white: '#ffffff',
    primaryButtonColor:"#2a3447",
    logo: 'https://accounts.powwr.com/assets/powwr-logo-Unbranded.svg', 
  };

  private themeSource = new BehaviorSubject<any>(this.loadThemeFromLocalStorage());
  theme$ = this.themeSource.asObservable(); 

  private logoSource = new BehaviorSubject<string>(this.defaultTheme.logo);
  logo$ = this.logoSource.asObservable(); 
  constructor() {
    this.applyTheme(this.themeSource.value); 
  }

  // Load theme from localStorage or return default
  private loadThemeFromLocalStorage(): any {
    const theme = { ...this.defaultTheme };
    (Object.keys(this.defaultTheme) as (keyof typeof theme)[]).forEach((key) => {
      const storedValue = localStorage.getItem(key);
      if (storedValue) {
        theme[key] = storedValue;
      }
    });
    return theme;
  }

  // Apply theme variables to CSS custom properties
  applyTheme(theme: any): void {
    const root = document.documentElement;
    Object.keys(theme).forEach((key) => {
      if (key === 'logo') {
        this.updateLogo(theme.logo);
        return;
      }
      root.style.setProperty(`--${key}`, theme[key]);
    });
  }

  // Update the theme globally and notify subscribers
  updateTheme(newTheme: Partial<any>): void {
    const updatedTheme = { ...this.themeSource.value, ...newTheme };
    Object.keys(updatedTheme).forEach((key) => {
      localStorage.setItem(key, updatedTheme[key]);
    });
    this.applyTheme(updatedTheme);
    this.themeSource.next(updatedTheme); // Notify subscribers
  }

  // Reset to the default theme
  resetTheme(): void {
    Object.keys(this.defaultTheme).forEach((key) => {
      localStorage.removeItem(key);
    });
    this.applyTheme(this.defaultTheme);
    this.themeSource.next(this.defaultTheme);
  }

  // Update the logo separately
  updateLogo(newLogo: string): void {
    localStorage.setItem('logo', newLogo);
    this.logoSource.next(newLogo);
  }
}