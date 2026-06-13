# AI-Driven Playwright Test Generator

An AI-powered test automation framework that generates Playwright test scripts directly from GitHub Issues using GitHub Copilot Agent.

## Overview

This project demonstrates how AI can be integrated into the software testing lifecycle to automate test creation, validation, and code delivery.

The workflow enables GitHub Copilot Agent to:

- Read test requirements from GitHub Issues
- Follow project-specific guardrails and coding standards
- Analyze the existing Playwright framework
- Reuse existing Page Objects and utilities
- Generate Playwright automation scripts
- Execute validations
- Commit changes to a feature branch
- Create a Pull Request automatically

---

## Architecture

```text
GitHub Issue
      │
      ▼
GitHub Copilot Agent
      │
      ├── Read generateTest.prompt.md
      ├── Read GUARDRAILS.md
      ├── Read security-checks.yml
      │
      ▼
Analyze Playwright Framework
      │
      ▼
Generate Test Automation
      │
      ▼
Run Validation
      │
      ▼
Create Feature Branch
      │
      ▼
Commit & Push Changes
      │
      ▼
Create Pull Request
```

---

## Project Structure

```text
playwright-ai-test-generator
│
├── .github
│   ├── workflows
│   │   └── security-checks.yml
│   │
│   └── prompts
│       └── generateTest.prompt.md
│
├── pages
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   └── CartPage.js
│
├── tests
│
├── test-data
│
├── utils
│
├── GUARDRAILS.md
├── playwright.config.js
├── package.json
└── README.md
```

---

## AI Workflow

### Step 1: Create GitHub Issue

Example:

```text
Title:
Access About Page From Application Menu

Description:
1. Login using standard_user
2. Open application menu
3. Click About
4. Verify About page is displayed

Follow framework guardrails.
Reuse existing page objects.
```

---

### Step 2: Launch Copilot Agent

Open Copilot Agent in VS Code.

Provide:

```text
Issue ID: 1

Read generateTest.prompt.md

Implement GitHub Issue #1
```

---

### Step 3: Agent Execution

The agent automatically:

- Reads issue details
- Reads prompt file
- Reads guardrails
- Analyzes framework structure
- Identifies reusable components
- Generates Playwright test code
- Applies code changes

---

### Step 4: Automated Delivery

The agent:

- Creates a feature branch
- Commits changes
- Pushes branch to GitHub
- Creates Pull Request

---

## Guardrails

The framework uses `GUARDRAILS.md` to ensure generated code:

- Follows Page Object Model
- Reuses existing page objects
- Avoids duplicate methods
- Uses approved locator strategies
- Avoids hard-coded waits
- Supports parallel execution
- Follows framework conventions

---

## Security Checks

`security-checks.yml` validates:

- No hardcoded secrets
- No credentials committed
- Framework integrity
- Successful Playwright execution
- Pull Request readiness

---

## Example Agent Prompt

```text
Issue ID: 1

Read:
- generateTest.prompt.md
- GUARDRAILS.md
- security-checks.yml

Fetch GitHub Issue #1.

Analyze the Playwright framework.

Generate the required automation.

Create a feature branch.

Commit and push the changes.

Create a Pull Request.
```

---

## Benefits

- Faster test creation
- Consistent automation standards
- Reduced manual effort
- Improved code quality
- Automated pull request generation
- Scalable AI-assisted testing workflow

---

## Technologies Used

- Playwright
- JavaScript
- GitHub Copilot Agent
- GitHub Issues
- GitHub Actions
- Page Object Model (POM)

---

## Author
**Suneina Jemima**

AI-Driven Test Automation Proof of Concept using Playwright and GitHub Copilot Agent.
**Suneina Jemima**

AI-Driven Test Automation Proof of Concept using Playwright and GitHub Copilot Agent.
