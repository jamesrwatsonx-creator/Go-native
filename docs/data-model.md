# Data model

Core entities: `Account`, `Workspace`, `Membership`, `Profile`, `Organization`, `Verification`, `Opportunity`, `Source`, `Location`, `Match`, `PathItem`, `Application`, `Document`, `Case`, `Conversation`, `ConsentGrant`, `AgentRun`, `Approval`, and `AuditEvent`.

Every externally derived record has source URL/identifier, publisher, retrieval time, normalization version, license/terms state, and review state. Sensitive profile attributes and document content are partitioned from general discovery records. The canonical contracts live in `packages/schemas` and `packages/shared-types`.
