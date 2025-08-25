import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';

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
    this.translocoService.setActiveLang(lang === 'en' ? 'fr' : 'en');
  }
}
