import { Component } from '@angular/core';

interface Project {
  name: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
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
}
