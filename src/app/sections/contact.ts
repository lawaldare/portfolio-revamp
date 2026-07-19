import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Reveal } from '../shared/reveal';
import { Icon } from '../shared/icon';
import { socials } from '../data/db';

@Component({
  selector: 'app-contact',
  imports: [Reveal, Icon],
  template: `
    <section class="section contact" id="contact">
      <p class="contact__num" reveal><span class="grad-text">05.</span> what's next?</p>
      <h2 class="contact__title" reveal>
        Let's build something<br /><span class="grad-text">together.</span>
      </h2>
      <p class="contact__text" reveal>
        I'm available for remote work and always happy to talk about Angular, frontend engineering,
        or an idea you'd like to bring to life. My inbox is open.
      </p>
      <a class="btn btn--solid contact__cta" href="mailto:lawaldare@gmail.com" reveal>Say hello</a>

      <div class="contact__socials" reveal>
        @for (social of socials; track social.kind) {
          <a
            [href]="social.link"
            target="_blank"
            rel="noopener"
            [attr.aria-label]="social.label"
            [title]="social.label"
          >
            <app-icon [name]="social.kind" [size]="22" />
          </a>
        }
      </div>
    </section>

    <footer class="footer">
      <p>Designed &amp; built by Dare Lawal © {{ year }}</p>
    </footer>
  `,
  styles: `
    .contact {
      text-align: center;
      max-width: 720px;
    }

    .contact__num {
      font-family: var(--font-mono);
      font-size: 0.95rem;
      color: var(--text-dim);
      margin-bottom: 16px;
    }

    .contact__title {
      font-family: var(--font-display);
      font-size: clamp(2.2rem, 6vw, 3.6rem);
      font-weight: 700;
      letter-spacing: -0.03em;
      line-height: 1.1;
      margin-bottom: 22px;
    }

    .contact__text {
      color: var(--text-dim);
      max-width: 52ch;
      margin: 0 auto 36px;
    }

    .contact__cta {
      font-size: 1.05rem;
      padding: 15px 34px;
    }

    .contact__socials {
      display: flex;
      justify-content: center;
      gap: 26px;
      margin-top: 52px;

      a {
        color: var(--text-dim);
        transition:
          color 0.2s ease,
          transform 0.2s ease;

        &:hover {
          color: var(--accent-2);
          transform: translateY(-3px);
        }
      }
    }

    .footer {
      text-align: center;
      padding: 28px 24px 34px;
      border-top: 1px solid var(--border);

      p {
        font-family: var(--font-mono);
        font-size: 0.78rem;
        color: var(--text-faint);
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  public readonly socials = socials;
  public readonly year = new Date().getFullYear();
  public readonly ngVersion = 22;
}
