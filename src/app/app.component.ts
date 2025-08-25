import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { ThemeService } from './theme.service';

interface Project {
  nameKey: string;
  descriptionKey: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, TranslocoModule],
})
export class AppComponent {
  private translocoService = inject(TranslocoService);
  themeService = inject(ThemeService);
  constructor() {
    document.documentElement.lang = this.translocoService.getActiveLang();
    this.translocoService.langChanges$.subscribe((lang) => {
      document.documentElement.lang = lang;
    });
  }

  projects: Project[] = [
    {
      nameKey: 'projects.items.portfolio.name',
      descriptionKey: 'projects.items.portfolio.description',
    },
    {
      nameKey: 'projects.items.sample.name',
      descriptionKey: 'projects.items.sample.description',
    },
  ];

  email = 'jonathan.dagnault@ulaval.ca';

  toggleLanguage() {
    const lang = this.translocoService.getActiveLang();
    this.translocoService.setActiveLang(lang === 'en-ca' ? 'fr-ca' : 'en-ca');
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
