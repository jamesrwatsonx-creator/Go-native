export type WorkspaceKind =
  | "personal"
  | "business"
  | "employer_recruiter"
  | "nation_community"
  | "education_training"
  | "government_funder"
  | "service_provider"
  | "procurement_buyer";

export type SourceTrustTier = "official" | "verified_partner" | "community_submitted";
export type ApprovalState = "not_required" | "requested" | "approved" | "rejected" | "expired";

export interface Provenance {
  sourceUrl: string;
  publisher: string;
  retrievedAt: string;
  trustTier: SourceTrustTier;
  normalizationVersion: string;
  reviewState: "pending" | "reviewed" | "rejected";
}

export interface Opportunity {
  id: string;
  title: string;
  kind: string;
  provenance: Provenance;
}
