import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ThemeService } from 'src/app/services/theme.service';
import { NgStyle } from '@angular/common';
interface Theme {
  background: string;
  textPrimary: string;
  cardshadow: string;
  darkcardshadow: string;
  white: string;
  primaryButtonColor:string;
  logo: string; 
}

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule,NgStyle],
})
export class Task1Component implements OnInit {
  defaultTheme: Theme = {
    background: '#e0e0e0',
    textPrimary: '#2a3447',
    cardshadow: '#e0e0e0',
    darkcardshadow: '#666666',
    white: '#ffffff',
    primaryButtonColor:"#2a3447",
    logo: 'https://accounts.powwr.com/assets/powwr-logo-Unbranded.svg', // Default logo path
  };

  theme: Theme = { ...this.defaultTheme };

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.loadThemeFromLocalStorage();
    this.applyTheme(this.theme);
  }

  // Load theme from local storage
  loadThemeFromLocalStorage(): void {
    Object.keys(this.defaultTheme).forEach((key) => {
      const storedValue = localStorage.getItem(key);
      if (storedValue) {
        this.theme[key as keyof Theme] = storedValue;
      }
    });
  }

  // Apply theme variables to CSS custom properties
  applyTheme(theme: Theme): void {
    const root = document.documentElement;
    Object.keys(theme).forEach((key) => {
      if (key === 'logo') {
        this.themeService.updateLogo(theme.logo); // Notify service about logo change
        return;
      }
      root.style.setProperty(`--${key}`, theme[key as keyof Theme]);
    });
  }

  // Apply button handler to save and apply changes
  applyChanges(): void {
    Object.keys(this.theme).forEach((key) => {
      localStorage.setItem(key, this.theme[key as keyof Theme]);
    });
    this.applyTheme(this.theme);
  }

  // Reset button handler to revert to default theme
  resetTheme(): void {
    this.theme = { ...this.defaultTheme };
    Object.keys(this.defaultTheme).forEach((key) => {
      localStorage.removeItem(key);
    });
    this.applyTheme(this.defaultTheme);
  }
}