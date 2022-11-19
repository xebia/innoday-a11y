# Example project with a lot of accessibility tooling

There are two pages: `/success` which has no accessibility violations and `/fail` which has a lot of validations.

We are testing these pages with:

- Vitest unit test (App component) routed to both pages. A11y is tested with `vitest-axe` -> `npm run test`
- Cypress E2E with `cypress-axe`. This outputs a violation report in `axe-cy/*.html` -> `npm run cy:run` or `npm run cy:open`
- Axe CLI. This outputs a violation report in `axe-results.json` -> `npm run axe`
- Pa11y. This outputs a violation report in `pa11y-ci-report/*.html` -> `npm run pa11y`

All the tests except for the unit tests need to have a server running (`npm run dev` or `npm run build && npm run preview`).
