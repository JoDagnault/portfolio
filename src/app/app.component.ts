import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';

interface Project {
  name: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, TranslocoModule],
})
export class AppComponent {
  projects: Project[] = [
    {
      name: 'Portfolio Website',
      description: 'This website built with Angular to showcase my work.',
    },
    {
      name: 'Sample Project',
      description: 'A placeholder for future projects.',
    },
  ];

  email = 'jonathan.dagnault@ulaval.ca';

  constructor(private translocoService: TranslocoService) {}

  switchLanguage() {
    const current = this.translocoService.getActiveLang();
    const next = current === 'en' ? 'fr' : 'en';
    this.translocoService.setActiveLang(next);
  }
}
