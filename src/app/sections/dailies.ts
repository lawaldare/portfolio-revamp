import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Reveal } from '../shared/reveal';
import { dailies } from '../data/db';

@Component({
  selector: 'app-dailies',
  imports: [Reveal],
  template: `
    <section class="section" id="dailies">
      <div class="section-head" reveal>
        <span class="section-head__num">05.</span>
        <h2>Daily crafts</h2>
      </div>

      <p class="lede" reveal>
        Small UI challenges built in a day — quick experiments in layout, motion, and interaction.
      </p>

      <div class="pills">
        @for (daily of dailies; track daily.name; let i = $index) {
          <a
            class="chip"
            [href]="daily.link"
            target="_blank"
            rel="noopener"
            reveal
            [revealDelay]="(i % 6) * 60"
          >
            {{ daily.name }} <span class="arrow">↗</span>
          </a>
        }
      </div>
    </section>
  `,
  styles: `
    .lede {
      color: var(--text-dim);
      max-width: 60ch;
      margin-bottom: 32px;
    }

    .pills {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }

    .arrow {
      color: var(--accent-2);
      font-size: 0.85em;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dailies {
  public readonly dailies = dailies;
}
