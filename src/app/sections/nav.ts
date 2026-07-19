import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface NavLink {
  id: string;
  label: string;
}

@Component({
  selector: 'app-nav',
  host: { '(window:scroll)': 'onScroll()' },
  template: `
    <header class="nav" [class.nav--scrolled]="scrolled()">
      <a class="nav__logo" href="#top" (click)="close()">dare<span class="grad-text">.lawal</span></a>

      <nav class="nav__links" aria-label="Primary">
        @for (link of links; track link.id; let i = $index) {
          <a class="nav__link" [href]="'#' + link.id">
            <span class="nav__num">0{{ i + 1 }}.</span>{{ link.label }}
          </a>
        }
        <a class="btn btn--ghost nav__resume" href="resume.pdf" download="dare-lawal-resume">Resume</a>
      </nav>

      <button
        class="nav__burger"
        (click)="toggle()"
        aria-label="Toggle menu"
        [attr.aria-expanded]="menuOpen()"
      >
        <span [class.open]="menuOpen()"></span>
        <span [class.open]="menuOpen()"></span>
      </button>

      @if (menuOpen()) {
        <nav class="nav__mobile" aria-label="Mobile">
          @for (link of links; track link.id; let i = $index) {
            <a [href]="'#' + link.id" (click)="close()">
              <span class="nav__num">0{{ i + 1 }}.</span>{{ link.label }}
            </a>
          }
          <a href="resume.pdf" download="dare-lawal-resume" class="btn btn--ghost" (click)="close()">Resume</a>
        </nav>
      }
    </header>
  `,
  styles: `
    .nav {
      position: fixed;
      inset: 0 0 auto 0;
      height: var(--nav-h);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 clamp(20px, 4vw, 48px);
      z-index: 100;
      transition: background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
      border-bottom: 1px solid transparent;

      &--scrolled {
        background: rgba(8, 8, 13, 0.72);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        border-bottom-color: var(--border);
      }
    }

    .nav__logo {
      font-family: var(--font-mono);
      font-weight: 500;
      font-size: 1.05rem;
      letter-spacing: -0.02em;
    }

    .nav__links {
      display: flex;
      align-items: center;
      gap: 30px;
    }

    .nav__link {
      font-family: var(--font-display);
      font-size: 0.9rem;
      color: var(--text-dim);
      transition: color 0.2s ease;

      &:hover {
        color: var(--text);
      }
    }

    .nav__num {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      margin-right: 6px;
      background: var(--grad);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    .nav__resume {
      padding: 9px 20px;
      font-size: 0.85rem;
    }

    .nav__burger {
      display: none;
      flex-direction: column;
      gap: 7px;
      padding: 8px;

      span {
        display: block;
        width: 26px;
        height: 2px;
        background: var(--text);
        border-radius: 2px;
        transition: transform 0.25s ease;

        &:first-child.open { transform: translateY(4.5px) rotate(45deg); }
        &:last-child.open { transform: translateY(-4.5px) rotate(-45deg); }
      }
    }

    .nav__mobile {
      position: absolute;
      top: var(--nav-h);
      left: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 22px;
      padding: 28px 24px 36px;
      background: rgba(10, 10, 17, 0.97);
      backdrop-filter: blur(18px);
      border-bottom: 1px solid var(--border);

      a {
        font-family: var(--font-display);
        font-size: 1.05rem;
        color: var(--text-dim);

        &:hover { color: var(--text); }
      }
    }

    @media (max-width: 860px) {
      .nav__links { display: none; }
      .nav__burger { display: flex; }
      .nav {
        background: rgba(8, 8, 13, 0.72);
        backdrop-filter: blur(14px);
        border-bottom-color: var(--border);
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Nav {
  public readonly links: NavLink[] = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'work', label: 'Work' },
    { id: 'publications', label: 'Publications' },
    { id: 'contact', label: 'Contact' },
  ];

  public readonly scrolled = signal(false);
  public readonly menuOpen = signal(false);

  public onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  public toggle(): void {
    this.menuOpen.update((v) => !v);
  }

  public close(): void {
    this.menuOpen.set(false);
  }
}
