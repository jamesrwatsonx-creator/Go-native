# Testing strategy

Test at the smallest trustworthy boundary: unit tests for rules/normalization, schema contract tests between apps and services, integration tests for Postgres/OpenFGA/OpenBao adapters, and end-to-end flows for onboarding, consent, opportunity save, document sharing, agent approval, and workspace isolation.

Security tests cover authorization bypass, tenant isolation, upload handling, secrets leakage, prompt injection, and connector revocation. Accessibility testing includes keyboard, screen reader, contrast, dynamic type, and reduced motion. Promptfoo is a planned evaluation harness for agent behavior; Appium is planned for native mobile journeys.
