export type Role = "admin" | "editor" | "viewer" | "user";

export interface AuthUser {
  id: string;
  role: Role;
  mfaVerified: boolean;
}

export function requireAdmin(user: AuthUser): void {
  if (user.role !== "admin" && user.role !== "editor") {
    throw new Error("Forbidden: admin/editor role required");
  }
  if (!user.mfaVerified) {
    throw new Error("Forbidden: MFA verification required");
  }
}

export function requirePublicAccess(user: AuthUser): void {
  if (user.role !== "user") {
    throw new Error("Forbidden: user role required");
  }
}
