# Integration catalog

All entries require license, security, maintenance, and product-fit review before activation. “Integrate” means a pinned dependency or separately deployed adapter behind a local contract; it does not mean vendoring upstream source.

| Project | Stage | Decision | Go Native role |
| --- | --- | --- | --- |
| last30days-skill | later | reference/adapt | freshness-oriented research workflow patterns |
| Crawl4AI | core research | integrate | controlled web extraction adapter |
| Firecrawl | core research | integrate | managed crawl/search option behind provider adapter |
| MarkItDown | core documents | integrate | convert approved documents to structured text |
| LangGraph | core agent | integrate | durable, approval-aware agent workflows |
| Mem0 | secondary | adapt/integrate | scoped, user-controlled agent memory |
| OpenFGA | core trust | integrate | relationship-based authorization |
| OpenBao | core trust | integrate | secret lifecycle and dynamic credentials |
| MobileAgent-Android | later | reference/adapt | mobile-agent research patterns; no autonomous device action |
| compose-android--animations | later | reference/adapt | Compose motion patterns |
| android-maps-compose | core Android | integrate | accessible Android map experience |
| promptfoo | core quality | integrate | agent prompt/tool regression and red-team tests |
| Appium | core quality | integrate | cross-platform mobile end-to-end tests |
| lottie-react-native | core mobile experience* | integrate | shipped JSON animations for the AI orb, success states, and empty states |
| base44-to-supabase-sdk | secondary | reference/adapt | migration/interoperability patterns only |
| RAGFlow | secondary | evaluate | document/retrieval pipeline option |
| GraphRAG | later | evaluate | relationship-rich research exploration |
| agentic-inbox | secondary | reference/adapt | inbox triage interaction patterns |
| n8n | secondary | integrate selectively | human-reviewed workflow automation |
| browser-use | later | integrate selectively | isolated browser-worker tasks with approvals |
| modelcontextprotocol | core agent | integrate | standard tool boundary for future connectors |

## Required adapter seams

- `services/crawler`: `ResearchProvider` for Crawl4AI/Firecrawl.
- `services/document-intelligence`: `DocumentConverter` for MarkItDown and future extraction providers.
- `services/agent`: `WorkflowEngine`, `MemoryStore`, and approval-enforcing tools for LangGraph/Mem0/MCP.
- `services/browser-worker`: isolated, queue-based `BrowserTask` with a user approval token.
- `packages/agent-tools`: stable tool schemas; no provider-specific calls from UI code.
- `infrastructure/openfga` and `infrastructure/openbao`: deployment configurations, not embedded secrets.

\*`lottie-react-native` is the correct integration when the mobile client uses React Native. It should be installed as the maintained package—not vendored from this fork—and only for lightweight, non-essential motion. If `apps/android` remains native Jetpack Compose, use the platform-appropriate Lottie Compose library instead while retaining the same exported animation assets and motion specifications.

## Repositories evaluated but not adopted

| Repository | Decision | Reason |
| --- | --- | --- |
| `jamesrwatsonx-creator/Common` | Do not integrate | This is a fork of `containers/common`, a deprecated Go container-runtime library that has moved to `containers/container-libs`. Its seccomp, container, network, and Linux system layers do not serve Go Native’s application architecture. Keep it separate; do not add it as a dependency or vendor its code. |
