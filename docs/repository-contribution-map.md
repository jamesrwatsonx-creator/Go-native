# Repository contribution map — Go Native

**Inventory scope:** all 100 repositories accessible under `jamesrwatsonx-creator` at the time of this review.

This document answers a specific question: **what can each repository contribute to Go Native, as a whole service, a reusable component/pattern, a build-time capability, a growth capability, or not at all?**

## Adoption legend

- **P0 — Core candidate:** directly strengthens the Go Native product or its delivery pipeline.
- **P1 — Strong complement:** useful, but should be composed behind a narrow interface rather than becoming the product architecture by default.
- **P2 — Build / growth / operations:** valuable around the product, not a core runtime dependency.
- **P3 — Optional experiment:** plausible niche use; do not prioritize.
- **X — No meaningful Go Native fit:** keep separate.

**Use mode**
- **Service:** run as a bounded service/adapter.
- **Component:** reuse selected code/patterns.
- **Build-only:** development/QA/operations only.
- **Growth-only:** acquisition/content only.
- **No direct use:** do not integrate.

Before adopting upstream code, review current license, security posture, maintenance, data handling, and deployment cost.

## Universal architecture rule

Go Native should not become a pile of embedded repositories. Prefer:

```text
Go Native domain model
→ stable internal interface
→ adapter/service
→ upstream capability
```

The product owns identity, privacy, permissions, opportunity visibility, provenance, eligibility explanations, cases, and user experience. External repos supply capabilities.

## Complete inventory

| # | Repository | Priority | Go Native contribution | Use mode |
|---:|---|---|---|---|
| 1 | GHL | X | Repository is effectively empty; no capability to integrate today. Reserve name only if a future GoHighLevel adapter is added. | No direct use |
| 2 | voicebox | P1 | Local voice I/O for the Go Native Assistant: speech-to-text, text-to-speech, dictation, accessibility, hands-free navigation. Avoid voice cloning as a default product feature. | Service/component |
| 3 | codegraph | P2 | Semantic code intelligence for Codex/Claude/Hermes while building Go Native; reduces tool calls and improves repository navigation. | Build-only |
| 4 | odoo | P1 | Mature CRM/case/workflow ideas for provider workspaces, applicant pipelines, organizations, messaging, tasks, and reporting. Too large to embed wholesale; use as reference or bounded integration. | Component/reference |
| 5 | TradingAgents | X | Financial trading agents do not materially support the Indigenous opportunity product. | No direct use |
| 6 | uAgents | P3 | Scheduled/event-driven autonomous agents could power monitoring jobs, but Go Native already has simpler workflow/agent options. Evaluate only if decentralized agent networking becomes useful. | Service experiment |
| 7 | mem0 | P0 | Long-term assistant memory and personalization across interests, saved opportunities, user preferences, and prior conversations. Must stay consented and segregated from sensitive status/legal data. | Service/component |
| 8 | graphrag | P0 | Convert unstructured program pages/PDFs into entities and relationships; strong fit for opportunity, organization, benefit, source, eligibility, and jurisdiction knowledge graphs. | Service |
| 9 | crawl4ai | P0 | Source discovery and structured crawling of approved government, school, funder, Nation/community, and organization sites. | Service |
| 10 | Fooocus | P2 | Generate marketing/brand imagery. No need in core discovery runtime. | Growth-only |
| 11 | ComfyUI | P2 | Visual generation workflows for campaigns, education content, and provider marketing assets. | Growth/admin only |
| 12 | InvokeAI | P2 | Creative image workflow/admin content production; potentially safer controlled brand generation than ad-hoc image tools. | Growth/admin only |
| 13 | Deep-Live-Cam | X | Face-swap/deepfake capability creates unnecessary trust/privacy risk and solves no core Go Native problem. | No direct use |
| 14 | HunyuanVideo | P2 | Promotional/explainer video generation only. | Growth-only |
| 15 | Wan2.1 | P2 | Video/image generation for campaigns, explainers, onboarding media, or provider content. | Growth-only |
| 16 | Real-Time-Voice-Cloning | P3 | Could personalize TTS with explicit consent, but redundant with safer voice options and not needed for V1. | Optional component |
| 17 | promptfoo | P0 | Evaluate/red-team the Assistant, eligibility explanations, prompt injection handling, source citation behavior, and privacy boundaries. | Build/QA |
| 18 | ml-agents | X | Unity reinforcement-learning toolkit has no immediate role in Go Native. | No direct use |
| 19 | opencv | P1 | Document/photo capture preprocessing, crop/deskew/quality checks, QR/barcode/image utilities for applications and status/document workflows. | Mobile component |
| 20 | mediapipe | P1 | On-device vision/audio primitives and mobile ML tasks; useful later for document capture or accessibility without sending raw media to servers. | Mobile component |
| 21 | ultralytics | P2 | Optional object/document detection for intake automation and document pipelines; not needed until a real vision dataset/use case exists. | Service/component |
| 22 | cvat | P2 | Internal annotation/dataset QA if Go Native eventually trains document/vision classifiers. | Internal ML tooling |
| 23 | ncnn | P3 | Efficient on-device inference if custom mobile models become necessary. Avoid adding before there is a measured need. | Mobile inference |
| 24 | lobehub | P2 | Internal multi-agent operator console and orchestration ideas for source monitoring/administration; not a Go Native user-facing dependency. | Internal ops/reference |
| 25 | open-webui | P2 | Internal self-hosted LLM/RAG test console; useful for model comparison and administrator research. | Internal ops |
| 26 | Flowise | P1 | Prototype visual AI flows for source extraction, matching, assistant tools, and provider workflows before hardening them in code. | Internal/service |
| 27 | LocalAI | P1 | Self-hosted OpenAI-compatible inference for privacy-sensitive or cost-controlled workloads; useful as an optional model backend. | Service |
| 28 | browser-harness | P0 | User-authorized browser assistance for official forms, application navigation, link verification, and “help me complete this” workflows. Must remain approval-gated. | Service/tool |
| 29 | geo-seo-claude | P2 | GEO/SEO for public Go Native pages so grants/benefits guides are discoverable in traditional and AI search. | Growth-only |
| 30 | Swift-Agent-Skills | P2 | iOS build knowledge if/when a native iPhone client is added. | Build-only |
| 31 | claude-android-skill | P0 | Android architecture, Compose, offline-first patterns, testing, navigation, and modularization for the Android-first product. | Build-only |
| 32 | skills | P2 | Standard packaging/distribution of repeatable internal agent capabilities. Useful for Go Native engineering and research skills. | Build/ops |
| 33 | useful-ai-prompts | P2 | Prompt/skill library to mine for research, QA, support, data analysis, and admin workflows; do not copy blindly. | Build/ops |
| 34 | babysitter | P1 | Deterministic orchestration for long, multi-step source verification, application preparation, and recurring research workflows. | Internal/service |
| 35 | AIOS | P2 | Internal operator console patterns for admin, source monitoring, research missions, agents, memory, and automations. | Internal ops/reference |
| 36 | vibefeed | P3 | Minimal repository; possible syndication/content concept, but insufficient current capability to prioritize. | Optional |
| 37 | last30days-skill | P1 | Recent web/social signal discovery for new programs, community pain points, policy chatter, and provider reputation. Treat as discovery signals, never authoritative eligibility data. | Research service |
| 38 | vibe-studio-agent-skills | P2 | Engineering lifecycle skills: spec → plan → build → test → review → ship. Useful for disciplined Go Native delivery. | Build-only |
| 39 | headroom | P1 | Context compression for research/agent pipelines, reducing token cost when processing large API/source payloads. | Infrastructure component |
| 40 | open-notebook | P1 | Source notebooks, document research, citations, and program dossiers for internal verification/admin; patterns may inform user document workspaces. | Internal/service |
| 41 | Sana | P2 | Marketing/education image generation only. | Growth-only |
| 42 | cli-printing-press | P0 | Generate token-efficient CLIs/MCP adapters from public APIs or websites; high leverage for government, school, jobs, maps, calendars, and provider connectors. | Build/integration factory |
| 43 | printing-press-library | P0 | Catalog of prebuilt agent-oriented connectors; use to find existing integrations before writing new ones. | Integration catalog |
| 44 | launch-your-agent | P1 | Scaffold recurring agents for source freshness, verification queues, deadline checks, and internal monitoring. | Build/ops |
| 45 | new-marketingskills | P2 | Acquisition, SEO, copy, analytics, CRO, and launch workflows for Go Native growth. | Growth-only |
| 46 | OpenCut | P2 | Product tutorials, campaign video, grant explainer video, social clips. | Growth-only |
| 47 | skills-learning | P2 | Small composable engineering skills for reliable implementation and debugging. | Build-only |
| 48 | SkillSpector | P0 | Security gate for any third-party agent skill before it enters the Go Native/Maliky toolchain. | Security/build |
| 49 | pm-skills | P2 | Product discovery, PRDs, metrics, launch, research, and roadmap discipline. | Product ops |
| 50 | system_prompts_leaks | X | Prompt research may be intellectually useful, but no production dependency or core contribution belongs in Go Native. | No direct use |
| 51 | yt-dlp | P3 | Optional ingestion of public video/audio sources for research or educational content; rights/terms must be respected. | Research/growth |
| 52 | n8n | P0 | Automation backbone for reminders, notifications, source refreshes, webhook workflows, admin review queues, provider integrations, and digests. | Service |
| 53 | firecrawl | P0 | Search/scrape/extract approved web sources at scale. Strong source-ingestion complement to Crawl4AI; choose roles rather than duplicating blindly. | Service |
| 54 | loop-engineer-template | P1 | Persistent autonomous loops for source freshness, expired-opportunity checks, QA, SEO, and admin maintenance with shared memory. | Internal ops |
| 55 | vibe-studio-dyad | P2 | Local app-builder alternative and prototyping environment; useful for development, not runtime. | Build-only |
| 56 | hyperframes-Write-HTML.-Render-video.-Built-for-agents. | P2 | Agent-generated HTML/GSAP video for public explainers, opportunity digests, and social content. | Growth-only |
| 57 | hyperframes-student-kit | P2 | Reference projects for learning reusable motion/video patterns; not core app code. | Growth/build reference |
| 58 | dcode-agent-kit | P1 | Scaffold dedicated Go Native agents such as source verifier, benefits researcher, provider onboarding helper, and application-prep agent. | Build/service |
| 59 | loop-engineering | P1 | Agent loop design, context, audit, sync, and cost patterns for reliable recurring source/research workflows. | Internal ops |
| 60 | skills-fable | P2 | Reusable research/web/thinking/ops skills; mine for specific workflows rather than importing everything. | Build/ops |
| 61 | vibe-studio-seperate-idea-with-orca-codebase-memory-mcp | P2 | Codebase semantic memory for development agents working on Go Native. | Build-only |
| 62 | vibe-studio-GHL-agency-agents | P2 | Specialized agent-role templates could inspire provider support, growth, QA, and research agents; not user-facing architecture. | Build/ops |
| 63 | OpenMontage | P2 | Agentic video production for campaigns, tutorials, provider spotlights, and weekly opportunity media. | Growth-only |
| 64 | voice-and-search-AI-idea-Agent-Reach | P1 | Web/social platform reach for research agents and discovery of new sources. Treat social content as signals requiring source verification. | Research service |
| 65 | vibe-studio-or-seperate-app-orca | P2 | Multi-agent coding orchestrator for parallel Go Native development/worktrees. | Build-only |
| 66 | vibe-studio-skills-claude-design | P2 | Design, document, testing, and MCP skill examples for implementation workflows. | Build-only |
| 67 | free-claude-code | P2 | Model/provider proxy for coding agents and local tooling; no reason to place inside end-user Go Native. | Build infrastructure |
| 68 | video-use | P2 | Agent-directed editing for tutorials, interviews, explainers, and outreach media. | Growth-only |
| 69 | argent | P0 | Automated testing and interaction with Android/iOS emulators and physical devices; excellent for Go Native mobile QA and regression testing. | Build/QA |
| 70 | Finn-loop | P1 | Human-gated issue → implementation → review automation for disciplined Go Native engineering. | Build/QA |
| 71 | awesome-llm-apps | P1 | Reference implementations for RAG, voice, agents, fraud/research patterns; extract proven patterns, not the whole repository. | Component/reference |
| 72 | vibe-studio-taste-skill | P2 | Anti-generic frontend design guidance for new Go Native screens. | Build/design |
| 73 | superpowers | P2 | Spec-first/TDD/subagent engineering methodology. | Build-only |
| 74 | caveman | P3 | Reduce output token usage for internal coding agents; no product capability. | Build-only |
| 75 | skills-video | P2 | Remotion/video-generation skill knowledge for marketing and explainers. | Growth/build |
| 76 | impeccable | P1 | Deterministic frontend/design auditing, polishing, and anti-slop checks for Go Native UI. | Build/design QA |
| 77 | gsap-skills | P1 | Correct GSAP motion implementation for web transitions, drawers, cards, onboarding, and micro-interactions. | UI component/build |
| 78 | graphify | P1 | Graph/relationship tooling may complement the opportunity/organization/benefit graph. Evaluate against pgGraph + GraphRAG before adopting to avoid a third overlapping graph layer. | Service/reference |
| 79 | skills-finds | P2 | Discover/install agent skills consistently across the development toolchain. | Build-only |
| 80 | humanizer | P1 | Improve user-facing AI drafts—emails, application explanations, provider copy—while preserving facts/citations. Useful as a final prose pass, not a truth source. | Assistant component |
| 81 | new-social-media-skills | P2 | Multi-platform content workflows for public education, launches, weekly opportunity highlights, and provider acquisition. | Growth-only |
| 82 | github-mcp-server | P0 | Repository/issues/PR/actions access for Go Native engineering agents and CI/maintenance workflows. | Build/ops |
| 83 | slack-mcp-server | P1 | Optional provider/team collaboration integration, alerts, support escalation, and internal operations. Use official OAuth/scopes only. | Integration |
| 84 | andrej-karpathy-skills | P2 | Coding-agent guardrails: think first, simplify, surgical changes, test against goals. | Build-only |
| 85 | pgGraph | P0 | Graph relationships directly on Postgres: user-goal ↔ opportunity ↔ provider ↔ benefit ↔ jurisdiction ↔ source relationships without a separate graph database. | Database extension |
| 86 | pgContext | P0 | Hybrid vector + full-text retrieval inside Postgres; excellent candidate for natural-language opportunity/benefit search and RAG. | Database extension |
| 87 | webmcp | P1 | Expose Go Native web actions as agent-readable tools; future path for browser agents to search, save, track, or navigate Go Native safely. | Web component/protocol |
| 88 | makerskills | P2 | Founder/operator research, decisions, scenario modeling, finance/ops skills. | Internal ops |
| 89 | RuView | X | WiFi sensing/vitals/presence creates no necessary Go Native capability and introduces major privacy/scope risk. | No direct use |
| 90 | vibe-studio-ui-ux-pro-max-skill | P2 | UI/UX design rules and searchable patterns for new screens and responsive states. | Build/design |
| 91 | goclaw | P1 | Multi-tenant agent gateway with many model providers/channels and PostgreSQL. Potential Assistant/provider-agent backend, but evaluate carefully against Go Native's existing API/privacy model before adoption. | Service candidate |
| 92 | gauntlet-loop | P1 | Builder-vs-critic quality loops for UI, research, assistant behavior, and integration acceptance tests. | Build/QA |
| 93 | diagram-design | P2 | Architecture, user-flow, data-flow, and benefits/status process diagrams for docs and stakeholder communication. | Documentation |
| 94 | base44-to-supabase-sdk | P0 | Strategic escape hatch from Base44 to self-hosted Supabase if platform limitations, cost, data control, or scaling become binding. | Migration infrastructure |
| 95 | vibe-coding-with-base44 | P0 | Immediate Base44 operating knowledge, troubleshooting, starter patterns, and prompt workflow while Go Native remains on Base44. | Build-only |
| 96 | vibe-studio-watson-ai-site | P3 | Reusable local-business presentation/call-journey patterns may inform employer/provider public profiles, but the product itself is unrelated. | Reference/component |
| 97 | Claude-of-Duty | X | Browser FPS/game rendering does not solve Go Native product needs. | No direct use |
| 98 | james-watson-gauntlet-loop | P1 | Project-specific constraint recovery, benchmark comparison, recursive critique, and verification; strong Go Native build/evaluation harness. | Build/QA |
| 99 | Game-Demo | X | Tiny demo repo with no demonstrated Go Native capability. | No direct use |
| 100 | yfinance | X | Market-price data is outside the current Go Native opportunity/benefits mission. | No direct use |

## Highest-leverage composition

### 1. Discovery + trusted ingestion

Use:

- **Crawl4AI / Firecrawl** for approved web ingestion
- **CLI Printing Press + Printing Press Library** for APIs/connectors
- **browser-harness** for user-authorized interactive official processes
- **Agent Reach / last30days** only as discovery-signal sources
- **n8n / loop engineers** for scheduled refresh/freshness work

Every candidate record still passes Go Native's source registry, provenance, deduplication, and review policy.

### 2. Search + intelligence

Use:

- **pgContext** for hybrid search
- **pgGraph** for relationship traversal
- **GraphRAG** for extraction/graph enrichment and corpus reasoning
- **mem0** only for consented conversational/preferences memory
- **headroom** where large structured payloads create material token cost

Keep the canonical truth in Go Native's Postgres/domain model.

### 3. Assistant + agent runtime

Evaluate:

- existing Go Native agent service as the default
- **goclaw** as a multi-tenant gateway candidate
- **Flowise** for prototyping
- **LocalAI** as an optional self-hosted model backend
- **dcode-agent-kit / launch-your-agent** to scaffold specialized internal agents
- **babysitter** where deterministic long workflows matter

Do not let an agent platform own identity, benefit truth, or authorization.

### 4. Applications, forms, and documents

Use:

- **browser-harness** for approval-gated form navigation
- **OpenCV / MediaPipe** for mobile capture quality and on-device preprocessing
- **open-notebook** patterns for source/document workspaces
- Go Native's own case/document model as the canonical workflow
- Odoo patterns only where provider CRM complexity justifies them

### 5. Mobile build quality

Use:

- **claude-android-skill**
- **Argent**
- **promptfoo**
- **Impeccable**
- **GSAP skills** for web motion
- **SkillSpector**
- **Finn-loop / Gauntlet / James Watson Gauntlet** for build verification

### 6. Base44 now, exit path later

Use:

- **vibe-coding-with-base44** while Base44 remains the build surface
- **base44-to-supabase-sdk** as a deliberate migration option, not an emergency plan

This avoids architectural captivity.

## Repositories that should not shape the product

Do not let unrelated capabilities create feature creep:

- TradingAgents
- ml-agents
- Deep-Live-Cam
- RuView
- Claude-of-Duty
- yfinance
- Game-Demo
- system_prompts_leaks

Image/video-generation repositories are useful for marketing/content, not for the core opportunity/benefits trust layer.

## Next integration order

1. Lock universal opportunity visibility.
2. pgContext + canonical search contract.
3. Crawl4AI/Firecrawl source ingestion adapters.
4. Source/provenance/dedup review pipeline.
5. n8n notifications + deadline/freshness workflows.
6. browser-harness approval-gated application assistance.
7. pgGraph + GraphRAG for relationships/explanations.
8. mem0 consented personalization memory.
9. provider workspace integrations.
10. voice/accessibility.
11. advanced autonomous loops only after auditability is proven.
