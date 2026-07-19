import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Reveal } from '../shared/reveal';
import { jobs } from '../data/db';

@Component({
  selector: 'app-experience',
  imports: [Reveal],
  template: `
    <section class="section" id="experience">
      <div class="section-head" reveal>
        <span class="section-head__num">02.</span>
        <h2>Where I've worked</h2>
      </div>

      <ol class="timeline">
        @for (job of visible(); track job.companyName + job.dateStart; let i = $index) {
          <li class="entry" reveal [revealDelay]="(i % 3) * 80">
            <span class="entry__dot" [style.background]="job.themeColor"></span>
            <div class="entry__card">
              <p class="entry__date">{{ job.date }}</p>
              <h3 class="entry__title">
                {{ job.title }} <span class="entry__at">·</span>
                <span class="entry__company" [style.color]="job.themeColor">{{ job.companyName }}</span>
              </h3>
              <p class="entry__location">{{ job.location }}</p>
            </div>
          </li>
        }
      </ol>

      <div class="more">
        <button class="btn btn--ghost" (click)="toggle()">
          {{ showAll() ? 'Show fewer' : 'Show all ' + total + ' roles' }}
        </button>
      </div>
    </section>
  `,
  styles: `
    .timeline {
      list-style: none;
      position: relative;
      padding-left: 28px;

      &::before {
        content: '';
        position: absolute;
        left: 5px;
        top: 6px;
        bottom: 6px;
        width: 2px;
        background: linear-gradient(180deg, var(--accent-1), var(--accent-2), transparent);
        opacity: 0.35;
      }
    }

    .entry {
      position: relative;
      padding-bottom: 30px;

      &:last-child { padding-bottom: 0; }
    }

    .entry__dot {
      position: absolute;
      left: -28px;
      top: 8px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      box-shadow: 0 0 14px currentColor;
    }

    .entry__card {
      padding: 20px 24px;
      border: 1px solid var(--border);
      border-radius: var(--radius);
      background: var(--surface);
      transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;

      &:hover {
        transform: translateX(6px);
        background: var(--surface-hover);
        border-color: rgba(123, 104, 238, 0.4);
      }
    }

    .entry__date {
      font-family: var(--font-mono);
      font-size: 0.78rem;
      color: var(--text-faint);
      margin-bottom: 6px;
    }

    .entry__title {
      font-family: var(--font-display);
      font-size: 1.1rem;
      font-weight: 600;
    }

    .entry__at { color: var(--text-faint); margin: 0 4px; }

    .entry__location {
      font-size: 0.88rem;
      color: var(--text-dim);
      margin-top: 4px;
    }

    .more {
      margin-top: 36px;
      text-align: center;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  public readonly total = jobs.length;
  public readonly showAll = signal(false);
  public readonly visible = computed(() => (this.showAll() ? jobs : jobs.slice(0, 6)));

  public toggle(): void {
    this.showAll.update((v) => !v);
  }
}
