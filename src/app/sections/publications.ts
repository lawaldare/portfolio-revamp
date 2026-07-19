import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Reveal } from '../shared/reveal';
import { Icon } from '../shared/icon';
import { papers } from '../data/db';

@Component({
  selector: 'app-publications',
  imports: [Reveal, Icon],
  template: `
    <section class="section" id="publications">
      <div class="section-head" reveal>
        <span class="section-head__num">04.</span>
        <h2>Publications</h2>
      </div>

      <p class="lede" reveal>
        Research papers I've contributed to through my work on scientific data platforms at EMBL-EBI.
      </p>

      <ol class="papers">
        @for (paper of papers; track paper.title; let i = $index) {
          <li reveal [revealDelay]="i * 90">
            <a class="paper" [href]="paper.link" target="_blank" rel="noopener">
              <span class="paper__num grad-text">0{{ i + 1 }}</span>
              <span class="paper__body">
                <span class="paper__title">{{ paper.title }}</span>
                <span class="paper__venue">{{ paper.venue }}</span>
              </span>
              <app-icon class="paper__icon" name="external" [size]="20" />
            </a>
          </li>
        }
      </ol>
    </section>
  `,
  styles: `
    .lede {
      color: var(--text-dim);
      max-width: 60ch;
      margin-bottom: 36px;
    }

    .papers {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .paper {
      display: flex;
      align-items: center;
      gap: 24px;
      padding: 22px 26px;
      border: 1px solid var(--border);
      border-radius: var(--radius);
      background: var(--surface);
      transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;

      &:hover {
        transform: translateX(6px);
        background: var(--surface-hover);
        border-color: rgba(73, 204, 249, 0.5);

        .paper__icon { color: var(--accent-2); }
      }
    }

    .paper__num {
      font-family: var(--font-mono);
      font-size: 1.3rem;
      font-weight: 500;
    }

    .paper__body {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .paper__title {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 1.02rem;
    }

    .paper__venue {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--text-faint);
    }

    .paper__icon {
      color: var(--text-faint);
      transition: color 0.2s ease;
      flex-shrink: 0;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Publications {
  public readonly papers = papers;
}
