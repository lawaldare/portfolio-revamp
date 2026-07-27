# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` / `ng serve` — dev server at `http://localhost:4200/`, auto-reloads on change.
- `npm run build` / `ng build` — production build to `dist/portfolio-v2`.
- `npm run watch` — development-config build in watch mode.
- `npm test` / `ng test` — run unit tests via Vitest.
- `npx prettier --write .` — format (config in `.prettierrc`: single quotes, 100 print width, Angular parser for `*.html`).
- `ng generate component <name>` — scaffold a component (schematics default to SCSS style and skip spec files, per `angular.json`).

## Architecture

This is a single-page Angular 22 portfolio site (standalone components, zoneless-style with `ChangeDetectionStrategy.OnPush` everywhere, native control-flow syntax `@for`/`@if`).

**Composition**: `app.ts` (root) statically imports and renders every section component in order inside `app.html`: `Nav`, `Hero`, `About`, `Experience`, `Work`, `Publications`, `Contact`, plus fixed social-link rails. There is no routing in any meaningful sense — `app.routes.ts` is an empty array; the page is a single scroll experience with in-page anchor links (`#about`, `#work`, etc.).

**Data-driven content**: All content (projects, jobs, papers, socials, "dailies", stack chips) lives as typed arrays/interfaces in `src/app/data/db.ts`. Section components import directly from this file rather than fetching data or receiving it via inputs. To add/edit a project, job, publication, or social link, edit `db.ts` — no component changes needed unless the shape changes.

**Section components** (`src/app/sections/*.ts`): each is a single self-contained file combining the `@Component` decorator, inline `template`, and inline `styles` (no separate `.html`/`.scss` files per component, unlike the root `App` component which uses `templateUrl`/`styleUrl`). Follow this same inline-template/inline-styles pattern for new sections.

**Shared utilities** (`src/app/shared/`):
- `Icon` — a component rendering inline SVGs from a hardcoded `PATHS` lookup keyed by icon name (`github`, `linkedin`, `mail`, `external`, etc.). Add new icons by extending `PATHS`.
- `Reveal` — an attribute directive (`[reveal]`, optional `[revealDelay]`) that adds a scroll-triggered fade-up via `IntersectionObserver`. Applied throughout section templates on cards/headings for entrance animation.
- `JobDuration` — an attribute directive (`[duration]`) that computes a human-readable "X years Y months" string from a `Job`'s `dateStart`/`dateEnd` using `moment`, used in the Experience section timeline.

**Styling**: Global design tokens (CSS custom properties like `--accent-2`, `--grad`, `--surface`, `--border`, `--nav-h`, `--radius`) are defined in `src/styles.scss` and consumed throughout component-level `styles`. Section components rely on shared class names (`.section`, `.section-head`, `.card`, `.chip`, `.btn`) defined globally rather than redefining them locally.

**Assets**: Project screenshots and the resume live in `public/images` and `public/resume.pdf`, served from the app root per the `public` asset glob in `angular.json`.
