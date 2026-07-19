import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  inject,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <section class="hero" id="top">
      <div class="hero__inner">
        <p class="hero__intro">// hi, my name is</p>
        <h1 class="hero__name">
          Dare <span class="grad-text">Lawal<span class="hero__dot">.</span></span>
        </h1>
        <p class="hero__type">
          I am <span class="hero__typed">{{ typed() }}</span><span class="hero__caret" aria-hidden="true"></span>
        </p>
        <p class="hero__blurb">
          Frontend Engineer at
          <a href="https://www.ebi.ac.uk/" target="_blank" rel="noopener">EMBL-EBI</a> in Cambridge,
          building scientific web applications with Angular — including tools for exploring protein
          structures used by researchers worldwide.
        </p>
        <div class="hero__cta">
          <a class="btn btn--solid" href="#work">View my work</a>
          <a class="btn btn--ghost" href="resume.pdf" download="dare-lawal-resume">Download resume</a>
        </div>
      </div>
      <a class="hero__scroll" href="#about" aria-label="Scroll to about">
        <span></span>
      </a>
    </section>
  `,
  styles: `
    .hero {
      position: relative;
      min-height: 100svh;
      display: flex;
      align-items: center;
      max-width: 1140px;
      margin: 0 auto;
      padding: var(--nav-h) 24px 0;
    }

    .hero__intro {
      font-family: var(--font-mono);
      font-size: clamp(0.85rem, 1.6vw, 1rem);
      color: var(--accent-2);
      margin-bottom: 18px;
    }

    .hero__name {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: clamp(3.2rem, 11vw, 7.5rem);
      line-height: 1.02;
      letter-spacing: -0.04em;
      margin-bottom: 22px;
    }

    .hero__dot { color: var(--accent-2); }

    .hero__type {
      font-family: var(--font-display);
      font-size: clamp(1.25rem, 3.2vw, 2rem);
      font-weight: 500;
      color: var(--text-dim);
      margin-bottom: 26px;
      min-height: 1.5em;
    }

    .hero__typed { color: var(--text); }

    .hero__caret {
      display: inline-block;
      width: 3px;
      height: 1.15em;
      margin-left: 4px;
      vertical-align: text-bottom;
      background: var(--accent-2);
      animation: blink 1.1s steps(1) infinite;
    }

    @keyframes blink {
      50% { opacity: 0; }
    }

    .hero__blurb {
      max-width: 560px;
      color: var(--text-dim);
      font-size: 1.05rem;
      margin-bottom: 40px;

      a {
        color: var(--accent-2);
        border-bottom: 1px dashed rgba(73, 204, 249, 0.5);

        &:hover { border-bottom-style: solid; }
      }
    }

    .hero__cta {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }

    .hero__scroll {
      position: absolute;
      bottom: 34px;
      left: 50%;
      transform: translateX(-50%);
      width: 26px;
      height: 42px;
      border: 2px solid var(--text-faint);
      border-radius: 14px;
      display: flex;
      justify-content: center;
      padding-top: 7px;

      span {
        width: 4px;
        height: 8px;
        border-radius: 2px;
        background: var(--accent-2);
        animation: drop 1.6s ease-in-out infinite;
      }
    }

    @keyframes drop {
      0% { transform: translateY(0); opacity: 1; }
      70% { transform: translateY(14px); opacity: 0; }
      100% { transform: translateY(0); opacity: 0; }
    }

    @media (prefers-reduced-motion: reduce) {
      .hero__caret, .hero__scroll span { animation: none; }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero implements OnInit {
  public readonly typed = signal('');

  private readonly roles = [
    'a frontend engineer',
    'an Angular specialist',
    'a WordPress developer',
  ];
  private readonly destroyRef = inject(DestroyRef);
  private timer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.destroyRef.onDestroy(() => clearTimeout(this.timer));
    this.tick(0, 0, false);
  }

  private tick(roleIdx: number, charIdx: number, deleting: boolean): void {
    const role = this.roles[roleIdx];

    if (!deleting) {
      charIdx++;
      this.typed.set(role.slice(0, charIdx));
      if (charIdx === role.length) {
        this.timer = setTimeout(() => this.tick(roleIdx, charIdx, true), 1800);
        return;
      }
      this.timer = setTimeout(() => this.tick(roleIdx, charIdx, false), 75);
    } else {
      charIdx--;
      this.typed.set(role.slice(0, charIdx));
      if (charIdx === 0) {
        const next = (roleIdx + 1) % this.roles.length;
        this.timer = setTimeout(() => this.tick(next, 0, false), 350);
        return;
      }
      this.timer = setTimeout(() => this.tick(roleIdx, charIdx, true), 38);
    }
  }
}
