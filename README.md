# Project Setup

```sh
npm install
```

## Compile and Hot-Reload for Development

```sh
npm run dev
```

## Compile and Minify for Production

```sh
npm run build
```

## Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

## Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

## Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# Front-end Projects Guideline

## Essential Tools

- Node.js v20 and NPM v10
- Vue.js 3
- Vite.js for scaffolding a project.
- Vue Router for front-end routing.
- Pinina for front-end state management.
- Axios as the HTTP client.
- Tanstack Query for server-side state management.
- TailwindCSS for styling.
- ESLint for code linting and error prevention.
- Prettier for code formatting.
- Editor config for cross-editor consistency.
- Vuelidate for form validation.
- Vueuse for custom composables.
- Vitest or Jest for unit testing.
- Husky and line-staged for a good quality codebase.
- Reka UI as the UI component library.

## Recommended Files and Folders Structure

```
src/
├── assets/          # Static assets (images, global CSS, fonts)
│   └── images/
│   └── fonts/
│   └── styles/
├── components/      # Shared components
│   └── base/       # Base/UI components
│   └── common/     # Common business components
│   └── page/     # Page-specific components
│   └── icons/     # SVG icons as Vue components
├── composables/    # Shared composable functions
├── services/    # API callings
├── directives/    # Custom Vue directives
├── layouts/        # Layout components
├── lib/            # Utilities and helpers
│   └── utils/          # Utility functions and constants
├── views/          # Route components
├── stores/         # Pinia stores
public/  # Static assets (favicon, images, videos, etc.)
```

## Recommended Rules: Naming Files and Folders

### Folders

- kebab-case

### Vue components

- PascalCase

### Composables, stores, services and utilities

- camelCase

### Custom directives

- kebab-case

### Additional Rules

- Use multi-word names for all components.
- Use the "View" keyword at the end of all page components.
- Use the ".service" extension for all service files.
- Use the ".store" keyword at the end of all Pinia store files.

## Recommended Rules: Naming/Usage Variables

### Booleans

- is/has/should/can + Adjective/Noun

### Functions

- Multi-word name that must start with a verb

### Vue props (defining)

- camelCase

### Vue props (using in template)

- kebab-case

### Vue components (using in template)

- PascalCase

### Event emitters

- kebab-case

### Constants

- SCREAMING_SNAKE_CASE

## Common Files Rules

- There must not be any logs in production code.

## Vue Components Rules

- tags order: (template, script, style).
- Always use Composition API and script setup.
- The number of lines in a component should not exceed 300 lines.
- Extract logic into composables if it gets too complex.
- Use TailwindCSS classes and custom class syntax instead of using style tag as much as possible.
- Do not use TailwindCSS classes with arbitrary values when it's already defined in predefined classes.
- Properly type all of the component props (using type, required, default, validator).
- Do not import Vue macros like defineProps and defineEmits (they are auto available).
- Avoid global mixins

## Pinia Store Rules

- Always use setup store syntax.

## Git Workflow

### Branch naming conventions:

- feature/feature-name
- bugfix/bug-name
- hotfix/force-bugfix-name
- chore/task-name

### Commit messages conventions:

- The commit message must use the imperative tense.
- The commit message must be structured as follows:
  ```
  <type>: <title>
  ```
- Use these for type: fix, feat, chore, style, refactor.
- The type "feat" must be used when a commit adds a new feature to the application.
- The type "fix" must be used when a commit represents a bug fix for your application.
- The type "chore" must be used when routine tasks that don't modify the source code or tests, like updating dependencies or configurations are done.
- The type "style" must be used when the changes don't affect functionality but improve formatting, whitespace, linting, etc.
- The type "refactor" must be used when code changes neither fix a bug nor add a feature but improve code structure.
