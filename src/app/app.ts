import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Nav } from './sections/nav';
import { Hero } from './sections/hero';
import { About } from './sections/about';
import { Experience } from './sections/experience';
import { Work } from './sections/work';
import { Publications } from './sections/publications';
import { Contact } from './sections/contact';
import { Icon } from './shared/icon';

@Component({
  selector: 'app-root',
  imports: [Nav, Hero, About, Experience, Work, Publications, Contact, Icon],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
