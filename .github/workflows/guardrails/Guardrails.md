
# AI Test Generation Guardrails

## SauceDemo Playwright Hybrid Framework

### Objective

The AI agent is responsible for generating Playwright automation tests from GitHub Issues while strictly adhering to framework conventions, security requirements, and code quality standards.

---

# 1. Existing File Protection (HIGHEST PRIORITY)

The AI must preserve the integrity of the framework.

## Allowed Actions

* Create new test files.
* Create new page object files if absolutely necessary.
* Add new methods to existing page objects.
* Add new test data files.
* Add new utility functions.
* Add documentation files.

## Forbidden Actions

* Delete existing files.
* Rename existing files.
* Move existing files.
* Modify unrelated tests.
* Modify unrelated page objects.
* Modify existing passing tests.
* Modify existing assertions unless explicitly required.
* Modify workflow files unless explicitly instructed.
* Modify package.json dependencies unless explicitly required.

---

# 2. Mandatory Framework Analysis

Before generating any code:

1. Scan the entire repository.
2. Analyze:

   * pages/
   * tests/
   * test-data/
   * GlobalSetup.js
   * playwright.config.js
3. Identify reusable:

   * Page Objects
   * Utility Functions
   * Test Data
   * Existing Test Patterns

Code generation must begin only after repository analysis.

---

# 3. Reuse First Policy

The AI must always prefer reuse over creation.

Before creating:

* New Page Object
* New Locator
* New Helper Method
* New Utility Function

The AI must verify that an equivalent implementation does not already exist.

If reusable code exists:

USE IT.

Do not duplicate implementation.

---

# 4. Page Object Model Rules

All automation must follow Page Object Model.

## Page Classes

Allowed:

* Locators
* Page Actions
* Navigation Methods

Avoid:

* Business Assertions
* Test Logic
* Test Data

## Test Files

Allowed:

* Assertions
* Test Flow
* Test Orchestration

---

# 5. Locator Strategy

Preferred order:

1. getByTestId()
2. getByRole()
3. getByLabel()
4. Existing framework locator patterns

Avoid:

* Absolute XPath
* Dynamic XPath
* nth-child selectors
* Deep CSS chains

Locators must be stable and maintainable.

---

# 6. Wait Strategy

Allowed:

* Playwright auto-waiting
* expect()
* waitForLoadState()
* waitForResponse()

Forbidden:

* waitForTimeout()
* sleep()
* setTimeout()

Hardcoded waits are prohibited.

---

# 7. Test Design Rules

Each test must:

* Validate a single business scenario.
* Be independent.
* Support parallel execution.
* Be repeatable.
* Not depend on execution order.

Avoid:

* Shared mutable state.
* Cross-test dependencies.
* Hardcoded assumptions.

---

# 8. Test Data Rules

Use:

* Existing test-data files.
* Environment variables.
* Configuration values.

Do not:

* Hardcode usernames.
* Hardcode passwords.
* Hardcode URLs.
* Hardcode tokens.

---

# 9. SauceDemo-Specific Reuse Rules

Before creating anything new:

Search for existing implementations in:

* Login Page
* Inventory Page
* Cart Page
* Checkout Page
* Existing Sorting Tests
* Existing Utility Functions

Reuse existing functionality whenever possible.

Do not create duplicate page objects.

Do not create duplicate locators.

Do not create duplicate helper methods.

---

# 10. GitHub Issue Processing

When provided with an issue:

The AI must:

1. Read issue completely.
2. Identify:

   * Feature
   * Scenario
   * Acceptance Criteria
   * Expected Results
3. Map requirements to existing framework assets.
4. Reuse existing implementation.
5. Generate only missing code.

---

# 11. Code Quality Standards

Generated code must:

* Follow existing naming conventions.
* Follow existing folder structure.
* Use meaningful variable names.
* Be readable.
* Be maintainable.

Avoid:

* Dead code
* Duplicate code
* Unused variables
* Unused imports

---

# 12. Validation Requirements

Before Pull Request creation:

Verify:

✓ Code compiles

✓ No syntax errors

✓ No duplicate code

✓ No duplicate page objects

✓ No duplicate methods

✓ No duplicate locators

✓ No hardcoded waits

✓ No security violations

✓ Framework conventions followed

---

# 13. Security Rules

Never:

* Commit secrets
* Commit tokens
* Commit credentials
* Commit personal data

Use:

* Environment variables
* Existing configuration files

---

# 14. Pull Request Requirements

PR must include:

* Issue reference
* Summary of implementation
* Files added
* Files modified
* Test execution results

If validation fails:

DO NOT CREATE PR.

Report all failures.

---

# 15. Failure Handling

If uncertainty exists:

* Create new files rather than modifying working files.
* Ask for clarification if requirements are ambiguous.
* Do not guess framework behavior.
* Do not overwrite existing implementations.

Framework stability takes priority over code generation.

---

# 16. Success Criteria

A generated solution is successful only when:

* Requirements are fully implemented.
* Existing framework remains stable.
* No guardrails are violated.
* Security checks pass.
* Playwright tests execute successfully.
* Pull Request is ready for review.
