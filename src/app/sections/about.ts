import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Reveal } from '../shared/reveal';
import { stackChips } from '../data/db';

@Component({
  selector: 'app-about',
  imports: [Reveal],
  template: `
    <section class="section" id="about">
      <div class="section-head" reveal>
        <span class="section-head__num">01.</span>
        <h2>About me</h2>
      </div>

      <div class="about">
        <div class="about__text" reveal>
          <p>
            I'm a frontend engineer with over seven years of experience crafting dynamic, responsive
            web applications — most of them with Angular. Today I work at the European
            Bioinformatics Institute (EMBL-EBI) in Cambridge, contributing to scientific platforms
            like <strong>PDBe</strong> and the <strong>PDBe-KB</strong>.
          </p>
          <p>
            I care about clean, well-structured code that scales: elegant interfaces, thoughtful
            state management, and applications that stay maintainable long after they ship. Along
            the way I've worked with teams across the UK, Malta, Ukraine, Nigeria, and the US — in
            fintech, iGaming, capital markets, and science.
          </p>
          <p>
            I'm passionate about staying current with the frontend ecosystem — signals, zoneless
            Angular, and whatever comes next — and I'm available for remote work.
          </p>

          <div class="about__stats">
            <div class="stat" reveal [revealDelay]="0">
              <span class="stat__num grad-text">7+</span>
              <span class="stat__label">years of experience</span>
            </div>
            <div class="stat" reveal [revealDelay]="90">
              <span class="stat__num grad-text">5</span>
              <span class="stat__label">countries worked across</span>
            </div>
            <div class="stat" reveal [revealDelay]="180">
              <span class="stat__num grad-text">40+</span>
              <span class="stat__label">projects & experiments</span>
            </div>
            <div class="stat" reveal [revealDelay]="270">
              <span class="stat__num grad-text">3</span>
              <span class="stat__label">published papers</span>
            </div>
          </div>
        </div>

        <aside class="about__stack" reveal [revealDelay]="120">
          <h3>Technologies I work with</h3>
          <ul>
            @for (chip of chips; track chip) {
              <li class="chip">{{ chip }}</li>
            }
          </ul>
        </aside>
      </div>
    </section>
  `,
  styles: `
    .about {
      display: grid;
      grid-template-columns: 1.6fr 1fr;
      gap: 56px;
      align-items: start;
    }

    .about__text p {
      color: var(--text-dim);
      margin-bottom: 18px;
      max-width: 62ch;

      strong {
        color: var(--text);
        font-weight: 600;
      }
    }

    .about__stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 18px;
      margin-top: 36px;
    }

    .stat {
      padding: 18px 20px;
      border: 1px solid var(--border);
      border-radius: var(--radius);
      background: var(--surface);

      .stat__num {
        display: block;
        font-family: var(--font-display);
        font-size: 2rem;
        font-weight: 700;
        line-height: 1.1;
      }

      .stat__label {
        font-size: 0.82rem;
        color: var(--text-faint);
      }
    }

    .about__stack {
      position: sticky;
      top: calc(var(--nav-h) + 24px);
      padding: 26px;
      border: 1px solid var(--border);
      border-radius: var(--radius);
      background: var(--surface);

      h3 {
        font-family: var(--font-display);
        font-size: 1.05rem;
        font-weight: 600;
        margin-bottom: 18px;
      }

      ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }
    }

    @media (max-width: 860px) {
      .about {
        grid-template-columns: 1fr;
        gap: 40px;
      }
      .about__stack {
        position: static;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  public readonly chips = stackChips;
}
