# Security

Use defense in depth: authenticated APIs, OpenFGA relationship authorization, tenant/workspace isolation, OpenBao-managed secrets, encryption, rate limiting, content scanning, structured audit logs, dependency scanning, and adversarial tests.

No secrets, API tokens, service-account files, or production connection strings may enter git. Threat-model external connectors, document uploads, browser automation, prompt injection, cross-workspace access, and privileged verification actions before implementation. Security incidents must support containment, evidence preservation, notification, and recovery.
