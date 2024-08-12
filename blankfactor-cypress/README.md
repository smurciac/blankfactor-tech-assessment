# Blankfactor Cypress

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

1. To run -> `npm run cy:run`
2. To open -> `npm run cy:open`

## Project's Structure

```
.
├── README.md
├── cypress
│   ├── e2e
│   │   ├── features
│   │   │   └── blankfactor.feature
│   │   ├── pages
│   │   │   ├── home
│   │   │   │   └── home-page.js
│   │   │   ├── newsletter
│   │   │   │   └── newsletter-page.js
│   │   │   └── search
│   │   │       └── search-page.js
│   │   └── steps
│   │       ├── home
│   │       │   └── home.steps.js
│   │       ├── newsletter
│   │       │   └── newsletter.steps.js
│   │       └── search
│   │           └── search.steps.js
│   ├── fixtures
│   │   └── example.json
│   ├── jsconfig.json
│   └── support
│       ├── command.d.ts
│       ├── commands.js
│       ├── e2e.js
│       └── utils
│           └── commonFunctions.js
├── cypress.config.js
├── package-lock.json
└── package.json
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
