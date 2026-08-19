# WP Lucency Flexbox Grid System

WordPress plugin that adds three Gutenberg blocks (Container, Row, Column) for responsive flexbox and CSS Grid layouts. Layout choices are stored as block attributes (utility classes and CSS custom properties) and rendered on the front end without extra PHP.

Status: beta (`0.1.0`). Requires WordPress 6.5+ and PHP 8.2+.

## What it demonstrates

This repo is a small, production-shaped Gutenberg plugin: namespaced PHP bootstrap, `block.json` registration, editor UI built with WordPress components, and a webpack build that compiles block scripts plus a hashed front-end stylesheet.

The CSS grid/flex utilities come from a separate Sass package, `lucency-flexbox-grid-system`, compiled into `build/assets`.

## Blocks

| Block | Role |
| --- | --- |
| **Container** | Top-level wrapper (`<section>`). Direct child of post content only (`parent: core/post-content`) |
| **Row** | Flex or grid parent; provides `display` and layout context to children |
| **Column** | Child of Row; responsive width (flex) or cell size (grid) |

Breakpoints live in `breakpoints.json` (`xxl` … `xs`) and are shared by the editor controls and the Sass build.

## Architecture

```
wp-lucency-flexbox-grid-system.php   Plugin bootstrap and constants
includes/
  autoload.php                       PSR-4-style autoloader for Lucency\
  init.php
  classes/
    class-init.php                   Hooks Manager, Category, Loader
    blocks/                          register_block_type + editor category
    assets/                          Manifest-based CSS enqueue
blocks/
  container|row|column/              Gutenberg blocks (edit / save / block.json)
  commons/                           Shared inspector UI and style helpers
  abstracts/constants.js             Control schema (classes vs CSS variables)
styles/main.scss                     Front-end utilities (from the Sass package)
```

PHP does not process post content. It registers blocks from `build/` and enqueues the compiled stylesheet. Class names and inline styles are produced in the editor (`updateClasses` / `updateStyles`) and saved with the block.

## Setup

```bash
npm install
composer install   # PHPCS only
npm run build
```

Copy the plugin folder into `wp-content/plugins` (or symlink it) and activate it. `build/` is gitignored; a clone is not runnable until `npm run build`.

### Scripts

| Command | Purpose |
| --- | --- |
| `npm start` | Watch / development build (`@wordpress/scripts` + extra CSS bundle) |
| `npm run build` | Production build |
| `npm test` | Jest unit tests (layout math and style helpers) |
| `npm run plugin-zip` | Zip for distribution |

## Tests

Unit tests cover pure helpers: breakpoint prefixes, display flags, column rounding, grid dimension estimates, and how `stylesClasses` maps to classes / CSS variables.

They do not boot WordPress. Editor integration is left to a real site (or e2e later).

```bash
npm test
```

## Security notes

- No REST routes, Ajax actions, or settings screens. No direct use of `$_GET` / `$_POST`.
- PHP files bail if `ABSPATH` is undefined.
- Asset URLs come from a local webpack manifest; resolved filenames are constrained to a single path segment.
- Editor-generated class names are drawn from a fixed control schema in `blocks/abstracts/constants.js`. Inline styles are CSS custom properties (`--gap`, `--padding-top`, …), not arbitrary CSS from PHP.

Users who can edit posts can still change block markup, as with any Gutenberg block. That is an editor capability issue, not an additional plugin API.

## License

GPL-2.0-or-later. See [LICENSE](LICENSE).
