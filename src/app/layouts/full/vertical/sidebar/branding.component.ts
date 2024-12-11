import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-branding',
  template: `
    <div class="branding">
      <a href="/">
        <img [src]="logo" alt="App Logo" />
      </a>
    </div>
  `,
  standalone: true,
})
export class BrandingComponent implements OnInit {
  logo: string;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.logo$.subscribe((newLogo) => {
      this.logo = newLogo;
    });
  }
}