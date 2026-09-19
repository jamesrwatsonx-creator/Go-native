export type WorkspaceKind =
  | "personal"
  | "business"
  | "employer_recruiter"
  | "education_training"
  | "grant_funding_provider"
  | "nation_community"
  | "friendship_centre"
  | "economic_development"
  | "government_program"
  | "foundation_nonprofit"
  | "accelerator_incubator"
  | "service_provider"
  | "procurement_buyer";

export type MembershipRole = "owner" | "admin" | "manager" | "reviewer" | "member";

export type OrganizationVerificationState =
  | "unverified"
  | "verification_pending"
  | "verified"
  | "needs_review"
  | "suspended";

export type SourceTrustTier = "official" | "verified_partner" | "community_submitted";
export type ApprovalState = "not_required" | "requested" | "approved" | "rejected" | "expired";

export type OpportunityStatus =
  | "saved"
  | "preparing"
  | "applied"
  | "waiting"
  | "accepted"
  | "declined"
  | "archived";

export type BenefitMatchState =
  | "available_now"
  | "may_qualify"
  | "application_required"
  | "review_required"
  | "not_enough_information";

export type StatusNavigatorState =
  | "registered_valid_card"
  | "registered_expired_card"
  | "lost_stolen_damaged"
  | "registered_no_card"
  | "needs_temporary_confirmation"
  | "first_secure_card"
  | "registration_information"
  | "pending_application";

export interface Provenance {
  sourceUrl: string;
  publisher: string;
  retrievedAt: string;
  trustTier: SourceTrustTier;
  normalizationVersion: string;
  reviewState: "pending" | "reviewed" | "rejected";
  effectiveDate?: string;
  lastVerifiedAt?: string;
  jurisdiction?: string;
  caveats?: string[];
}

export interface Opportunity {
  id: string;
  organizationId?: string;
  title: string;
  kind: string;
  provinceTerritory?: string[];
  deadline?: string;
  applicationUrl?: string;
  eligibilitySummary?: string;
  provenance: Provenance;
}

export interface Organization {
  id: string;
  name: string;
  kind: Exclude<WorkspaceKind, "personal">;
  verificationState: OrganizationVerificationState;
  provinceTerritory?: string;
  regionsServed?: string[];
}

export interface Membership {
  accountId: string;
  organizationId: string;
  role: MembershipRole;
  status: "invited" | "active" | "suspended" | "left";
}

export interface BenefitRule {
  id: string;
  title: string;
  category: string;
  jurisdiction: string;
  claimantClass?: string[];
  provinceTerritory?: string[];
  eligibilitySummary: string;
  applicationRequired?: boolean;
  officialUrl: string;
  provenance: Provenance;
}

export interface BenefitMatch {
  benefitRuleId: string;
  userId: string;
  state: BenefitMatchState;
  reasons: string[];
  missingFacts?: string[];
  officialConfirmationRequired: boolean;
}

export interface StatusCase {
  userId: string;
  selfReportedState: StatusNavigatorState;
  currentStep?: string;
  checklist: string[];
  officialLinks: string[];
  submittedAt?: string;
  followUpAt?: string;
  updatedAt: string;
}
