AI Test Generation Workflow — SauceDemo Playwright Hybrid Framework

Input Parameters

issue_id={{ISSUE_ID}}
Step 1 — Read GitHub Issue

Read the GitHub issue using the provided issue_id.

Extract and summarize:

Feature or module name.

Business scenario.

Preconditions.

Test steps.

Expected result.

Any acceptance criteria.

If the issue is ambiguous, stop and ask for clarification before generating code.
Step 2 — Read Guardrails and Project Rules

Read the following files before making any code changes:

.github/guardrails/GUARDRAILS.md

.github/copilot-instructions.md (if present)

Strictly follow all guardrail rules, especially:

Do not modify unrelated files.

Reuse existing page objects and methods.

Do not create duplicate locators or helper methods.

Do not use waitForTimeout().

Preserve existing framework structure.

Step 3 — Analyze Repository Structure

Analyze the current framework before generating code.

Read and inspect:

pages/
tests/
test-data/
GlobalSetup.js
playwright.config.js
package.json

Identify:

Existing Page Objects.

Reusable methods.

Existing test patterns.

Common locator strategy.

Naming conventions.

Any existing utilities or fixtures.

Before generating code, output a short analysis listing reusable page objects and methods that will be used.
Step 4 — Reuse Existing Implementation

Before creating new code:

Search for an existing page object related to the feature.

Search for existing methods that perform the required actions.

Search for existing locators for the same UI elements.

Search for similar tests in the tests/ folder.

Reuse existing implementations wherever possible.

Only create new:

Page object methods.

Locators.

Test files.

when no reusable implementation exists.

Step 5 — Generate Playwright Automation

Generate the Playwright JavaScript test using the existing framework conventions.

Requirements:

Use JavaScript (not TypeScript).

Use Playwright Test framework.

Follow Page Object Model.

Place locators and actions inside page classes.

Keep assertions inside test files unless the framework already uses assertion methods in pages.

Use meaningful test names starting with Verify.

Use Playwright best practices and auto-waiting.

Do not:

Use waitForTimeout().

Hardcode credentials or URLs.

Duplicate existing code.

Modify unrelated files.

Place the generated test in:

tests/

and update or create page object methods in:

pages/

only if required.

Step 6 — Execute and Validate

After generating code, run the following commands:

Validate that:

Tests compile successfully.

The generated test executes successfully.

No existing tests are broken.

No guardrail violations exist.

No duplicate methods or locators were introduced.

No hardcoded waits exist.

If validation fails:

Fix the generated code.

Re-run the tests.

Repeat until validation passes or a blocker is found.

Step 7 — Prepare Pull Request Summary

Prepare a PR summary including:

Issue ID and title.

Business scenario automated.

Files added or modified.

Reused page objects and methods.

Test execution result (pass/fail).

Any assumptions or limitations.

Expected Output Format

Provide output in the following structure:

Issue Summary
Repository Analysis

Reusable page objects found

Reusable methods found

Existing patterns identified

Files Created / Modified
Generated Code
Validation Results

Playwright execution status

Guardrail compliance status

Duplicate code check status

Pull Request Summary
Important Constraints

The AI agent must:

Preserve the stability of the existing SauceDemo Playwright framework.

Prefer reuse over creation.

Never overwrite working automation.

Generate only the minimum required code changes.

Follow all instructions in GUARDRAILS.md.

Why this prompt works

This prompt matches the behavior shown in your screenshots:

Read prompt file → The agent starts from this orchestration prompt.

Read guardrails → Explicit Step 2.

Read documentation and configuration files → Step 3 includes playwright.config.js, GlobalSetup.js, etc.

Read existing tests/pages → Step 4 enforces repository scanning and reuse.

Generate test safely → Steps 5–6 add validation before PR creation.

This is much stronger than a generic "generate a Playwright test" prompt and is the right approach for an enterprise-style AI automation workflow.

I prefer this response
ChatGPT
Response 2

Yes — I analyzed the screenshots you shared earlier. The prompt pattern being used is:

The workflow starts with a prompt file (`generate-test.prompt.md`).

It receives an issue_id as input.

The AI agent first reads the GitHub issue.

Then it reads guardrails and framework files.

Then it analyzes existing page objects/tests.

Then it generates Playwright tests.

Then it executes tests.

Then it creates a PR with results.

The screenshots also showed:

Reading `.github/guardrails/GUARDRAILS.md` first.

Reading project files like `pages/`, `tests/`, `playwright.config.js`.

Using GitHub MCP to fetch issue details.

Performing a reuse-first analysis before generating code.

Based on that, here is a production-style `generate-test.prompt.md` tailored for your SauceDemo Playwright JavaScript hybrid framework.

generate-test.prompt.md

Create this file at:

.github/prompts/generate-test.prompt.md

Why this matches your screenshot

This prompt mirrors the flow shown in your images:

“Read prompt file and fetched GitHub issue”

→ Covered by Step 1.

“Read documentation and configuration files”

→ Covered by Step 2 and Step 3.

“Read GUARDRAILS.md”

→ Explicitly required in Step 2.

“Analyzed existing files before generating code”

→ Covered by Step 4 (Mandatory Reuse Analysis).

“Generated test, ran Playwright, then created PR”

→ Covered by Steps 5–9.

Suggested companion files

For the full setup, keep these files together:

.github/guardrails/GUARDRAILS.md → Rules and constraints.

.github/prompts/generate-test.prompt.md → Main automation workflow.

.github/prompts/review-generated-test.prompt.md → Secondary validation/review prompt.

.github/workflows/security-checks.yml → Automated validation in CI.

.github/copilot-instructions.md → VS Code Copilot guidance.

