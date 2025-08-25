import { TestBed } from '@angular/core/testing';
import { provideTransloco } from '@ngneat/transloco';
import { AppComponent } from './app.component';
import { TranslocoJsonLoader } from './app.config';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideTransloco({
          config: {
            availableLangs: ['en', 'fr'],
            defaultLang: 'en',
          },
          loader: TranslocoJsonLoader,
        }),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render navigation links', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const navLinks = compiled.querySelectorAll('nav a');
    expect(navLinks.length).toBe(3);
  });
});
