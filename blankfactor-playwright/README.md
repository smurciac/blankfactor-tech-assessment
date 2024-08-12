# Blankfactor Playwright

## Copyright (c) 2024 Automation Project

```
Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
```

## Pre-Conditions

**.bash_profile:**

1. Open the `Terminal`
2. Create .bash_profile by typing -> `touch ~/.bash_profile`

**Install nvm & node:**

1. Run -> `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash`
2. Type -> `nvm help`
3. Type -> `nvm install v14.19.3` (Or latest version)
4. To verify the installation, type -> `nvm ls` and you should get something like:

```
->     v14.19.3
default -> v14.19.3 (-> v14.19.3)
node -> stable (-> v14.19.3) (default)
stable -> v14.19.3 (-> v14.19.3) (default)
```

## Repo

**Link to Repo:** https://github.com/smurciac/blankfactor-tech-assessment

1. `https://github.com/smurciac/blankfactor-tech-assessment`

## Install package.json

On `Terminal`, change path to the project's path

1. (Optional) Delete the file `package-lock.json`
2. To install all dependencies run -> `npm i`

## Executing Automated Tests

Once all the dependencies are installed, go to the root's project:

1. On .env file, put the BROWSER version that you wish to execute, i.e chrome; and for BASEURL, the corresponding based on the tech assessment requirement.
2. Run -> `npx playwright install`
3. To run -> `npm run test`

## Project's Structure

```
.
├── README.md
├── cucumber.json
├── package-lock.json
├── package.json
├── playwright.config.ts
├── src
│   ├── pages
│   │   ├── base-page.ts
│   │   ├── home
│   │   │   └── home-page.ts
│   │   ├── index.ts
│   │   ├── newsletter
│   │   │   └── newsletter-page.ts
│   │   └── search
│   │       └── search-page.ts
│   ├── runner
│   │   └── hooks.ts
│   └── test
│       ├── features
│       │   └── blankfactor.feature
│       └── steps
│           ├── home
│           │   └── home-steps.ts
│           ├── newsletter
│           │   └── newsletter-steps.ts
│           └── search
│               └── search-steps.ts
├── test-results
│   └── cucumber-report.html
└── tsconfig.json
```

## Visual Studio Cucumber

For Cucumber to understand where are the steps located,
we need to add the following into the `setting.json` file.

```
{
  "cucumberautocomplete.steps": [
    "src/test/steps/**/*-steps.ts",
    "node_modules/qa-lib/src/step_definitions/*.js"
  ],
  "cucumberautocomplete.strictGherkinCompletion": true
}
```

## Visual Studio Extensions

1. Cucumber (Gherkin) Full Support
2. Cucumber
3. Snippets and Syntax Highlight for Gherkin (Cucumber)
4. ESLint
5. JavaScript (ES6) code snippets
6. Prettier - Code formatter
7. GitLens — Git supercharged
