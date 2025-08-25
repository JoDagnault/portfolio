# AGENTS Instructions

- To run the unit tests, set the `CHROME_BIN` environment variable and run:
  `CHROME_BIN=/tmp/chrome-headless-no-sandbox npm test -- --watch=false --browsers=ChromeHeadless`
- The path `/tmp/chrome-headless-no-sandbox` should be an executable script that launches Google Chrome in headless mode, for example:

  ```bash
  #!/usr/bin/env bash
  /usr/bin/google-chrome --headless --no-sandbox --disable-gpu "$@"
  ```

  Save this script to `/tmp/chrome-headless-no-sandbox` and make it executable if it does not already exist.

- Before committing changes, format and lint the codebase to ensure consistency:
  - `npm run format` – runs Prettier to format the repository
  - `npm run lint` – runs ESLint to check for code quality issues
