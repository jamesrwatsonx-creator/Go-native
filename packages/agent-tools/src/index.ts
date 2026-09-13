import type { ApprovalState } from "../../shared-types/src";

export interface AgentToolCall {
  name: string;
  purpose: string;
  approval: ApprovalState;
  input: unknown;
}

/** External or persistent actions cannot execute until the user approves them. */
export function mayExecute(call: AgentToolCall): boolean {
  const requiresApproval = ["send_email", "submit_application", "share_document", "browser_action"];
  return !requiresApproval.includes(call.name) || call.approval === "approved";
}
