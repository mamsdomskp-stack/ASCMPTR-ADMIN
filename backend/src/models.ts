export type ListingType = "job" | "scheme";
export type ListingStatus = "fetched" | "approved" | "live" | "rejected" | "expired";

export interface SourceMetadata {
  sourceName: string;
  sourceUrl: string;
  fetchedAt: string;
}

export interface Listing {
  id: string;
  type: ListingType;
  title: string;
  ministry: string;
  eligibility: string;
  importantDates: string;
  selectionProcess: string;
  summary: string;
  applicationLink?: string; // admin only
  category: "central" | "state";
  qualification: string;
  status: ListingStatus;
  source: SourceMetadata;
  approvedBy?: string;
  approvedAt?: string;
  expiryDate: string;
}

export interface PublicListing {
  id: string;
  type: ListingType;
  title: string;
  ministry: string;
  eligibility: string;
  importantDates: string;
  selectionProcess: string;
  summary: string;
  category: "central" | "state";
  qualification: string;
  statusBadge: "New" | "Upcoming" | "Last Date Soon" | "Closed";
}
