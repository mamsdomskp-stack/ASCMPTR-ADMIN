# Government Job Notifications & Scheme Applications Platform

## 1) Non-Negotiable Separation
This solution is split into clearly isolated surfaces:
1. **Admin App (`admin-app/`)**: private moderation + publishing controls.
2. **User App (`user-app/`)**: public information-only experience.
3. **Backend (`backend/`)**: RBAC-secured data pipeline and APIs.

No direct role mixing is allowed.

## 2) Data Sources
Recommended source types:
- Official ministry websites
- Department recruitment portals
- Government RSS feeds
- Authorized government APIs/open data endpoints

Each fetched record stores:
- source name
- source URL (admin only)
- fetched timestamp

## 3) Approval Workflow
1. **Fetch**: scheduled job (hourly/daily configurable) ingests raw records.
2. **Normalize**: map into common listing schema.
3. **Queue**: mark status as `fetched`.
4. **Review (Admin)**:
   - Approve
   - Edit
   - Reject
5. **Publish**: only `approved` records move to live public tables.
6. **Sanitize**: remove application links and source URLs before public API response.
7. **Expiry**: auto-mark expired and hide/close from public feed.

## 4) Security Model
- RBAC with minimum roles: `admin`, `editor`, `viewer`, `user`
- Admin authentication: password + OTP/MFA required
- Separate auth scopes/tokens for admin and public APIs
- Audit logging required for approve/edit/reject actions
- Server-side enforcement that public payload excludes:
  - `applicationLink`
  - `sourceUrl`
  - redirect actions

## 5) UX Compliance
User app must remain an **information platform**, not an application redirection app.
- Minimal government-style UI
- No flashy CTAs
- Mandatory disclaimer in app

## 6) Scalability Notes
- Use queue-based ingestion for source fetchers
- Add deduplication hash by title+department+date
- Store status transitions in audit table
- Cache public feed for lower latency
