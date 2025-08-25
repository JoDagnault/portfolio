import { Injectable, Renderer2, RendererFactory2, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private renderer: Renderer2 = inject(RendererFactory2).createRenderer(null, null);
  private theme: 'light' | 'dark' =
    (localStorage.getItem('theme') as 'light' | 'dark' | null) ?? 'light';

  constructor() {
    this.updateThemeClass();
  }

  toggleTheme(): void {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', this.theme);
    this.updateThemeClass();
  }

  get currentTheme(): 'light' | 'dark' {
    return this.theme;
  }

  private updateThemeClass(): void {
    const htmlElement = document.documentElement;
    if (this.theme === 'dark') {
      this.renderer.addClass(htmlElement, 'dark-theme');
    } else {
      this.renderer.removeClass(htmlElement, 'dark-theme');
    }
  }
}
