import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Reveal } from '../shared/reveal';
import { Icon } from '../shared/icon';
import { projects } from '../data/db';

const STACK_COLORS: Record<string, string> = {
  angular: '#fd71af',
  javascript: '#ffc800',
  wordpress: '#49ccf9',
  animation: '#00b884',
};

@Component({
  selector: 'app-work',
  imports: [Reveal, Icon],
  template: `
    <section class="section" id="work">
      <div class="section-head" reveal>
        <span class="section-head__num">03.</span>
        <h2>Selected work</h2>
      </div>

      <div class="filters" reveal>
        @for (stack of stacks; track stack) {
          <button
            class="chip"
            [class.chip--active]="filter() === stack"
            (click)="filter.set(stack)"
          >
            {{ stack }}
            <span class="count">{{ countFor(stack) }}</span>
          </button>
        }
      </div>

      <div class="grid">
        @for (p of filtered(); track p.name; let i = $index) {
          <article class="card" reveal [revealDelay]="(i % 3) * 90">
            <a class="card__media" [href]="p.viewLink" target="_blank" rel="noopener" [attr.aria-label]="'Open ' + p.name">
              <img [src]="p.imageURL" [alt]="p.name" loading="lazy" />
            </a>
            <div class="card__body">
              <div class="card__top">
                <span class="card__stack" [style.color]="stackColor(p.stack)">{{ p.stack }}</span>
                <span class="card__links">
                  <a [href]="p.repoLink" target="_blank" rel="noopener" [attr.aria-label]="p.name + ' source code'">
                    <app-icon name="github" [size]="18" />
                  </a>
                  <a [href]="p.viewLink" target="_blank" rel="noopener" [attr.aria-label]="p.name + ' live site'">
                    <app-icon name="external" [size]="18" />
                  </a>
                </span>
              </div>
              <h3 class="card__title">{{ p.name }}</h3>
              <p class="card__desc">{{ p.desc }}</p>
            </div>
          </article>
        }
      </div>
    </section>
  `,
  styles: `
    .filters {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 40px;
    }

    .chip--active {
      color: #fff;
      border-color: transparent;
      background: var(--grad);

      .count { color: rgba(255, 255, 255, 0.8); }
    }

    .count {
      font-size: 0.68rem;
      color: var(--text-faint);
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 26px;
    }

    .card {
      display: flex;
      flex-direction: column;
      border: 1px solid var(--border);
      border-radius: var(--radius);
      background: var(--surface);
      overflow: hidden;
      transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

      &:hover {
        transform: translateY(-6px);
        border-color: rgba(123, 104, 238, 0.55);
        box-shadow: 0 18px 44px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(73, 204, 249, 0.12);

        .card__media img { transform: scale(1.05); }
        .card__title { color: var(--accent-2); }
      }
    }

    .card__media {
      display: block;
      aspect-ratio: 16 / 10;
      overflow: hidden;
      background: var(--bg-raised);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
        transition: transform 0.4s ease;
      }
    }

    .card__body {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 20px 22px 24px;
    }

    .card__top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }

    .card__stack {
      font-family: var(--font-mono);
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .card__links {
      display: flex;
      gap: 14px;

      a {
        color: var(--text-dim);
        transition: color 0.2s ease, transform 0.2s ease;

        &:hover {
          color: var(--text);
          transform: translateY(-2px);
        }
      }
    }

    .card__title {
      font-family: var(--font-display);
      font-size: 1.15rem;
      font-weight: 600;
      margin-bottom: 8px;
      transition: color 0.2s ease;
    }

    .card__desc {
      font-size: 0.9rem;
      color: var(--text-dim);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Work {
  public readonly stacks = ['all', ...new Set(projects.map((p) => p.stack))];
  public readonly filter = signal('all');
  public readonly filtered = computed(() =>
    this.filter() === 'all' ? projects : projects.filter((p) => p.stack === this.filter()),
  );

  public countFor(stack: string): number {
    return stack === 'all' ? projects.length : projects.filter((p) => p.stack === stack).length;
  }

  public stackColor(stack: string): string {
    return STACK_COLORS[stack] ?? 'var(--text-dim)';
  }
}
