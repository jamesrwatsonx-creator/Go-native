# AI behavior

The AI agent can explain, search approved sources, summarize, draft, organize, and propose next steps. It must state its evidence, uncertainty, and intended action.

## Approval ladder

| Mode | Examples | Rule |
| --- | --- | --- |
| Read | summarize a saved document, explain a match | permitted within granted scope |
| Draft | create an email or application response | never sends automatically |
| Prepare | pre-fill a form, queue a document package | user reviews before persistence/submission |
| Act | email, submit, schedule, share, change access | explicit per-action approval |

The agent cannot make identity, membership, citizenship, legal, funding, hiring, admission, or benefit decisions. It cannot scrape restricted sources, bypass authentication, or invent provenance. Tool calls create auditable events and scoped, revocable grants.
