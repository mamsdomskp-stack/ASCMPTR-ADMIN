import { Listing, PublicListing } from "./models";

export function toStatusBadge(expiryDate: string): PublicListing["statusBadge"] {
  const expiry = new Date(expiryDate).getTime();
  const now = Date.now();
  if (expiry < now) return "Closed";

  const daysLeft = Math.ceil((expiry - now) / (1000 * 60 * 60 * 24));
  if (daysLeft <= 3) return "Last Date Soon";
  if (daysLeft <= 10) return "New";
  return "Upcoming";
}

export function sanitizeForPublic(listing: Listing): PublicListing {
  return {
    id: listing.id,
    type: listing.type,
    title: listing.title,
    ministry: listing.ministry,
    eligibility: listing.eligibility,
    importantDates: listing.importantDates,
    selectionProcess: listing.selectionProcess,
    summary: listing.summary,
    category: listing.category,
    qualification: listing.qualification,
    statusBadge: toStatusBadge(listing.expiryDate)
  };
}

export function canPublish(listing: Listing): boolean {
  return listing.status === "approved";
}
