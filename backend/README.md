# Backend System (Govt Jobs & Schemes Information Platform)

This backend enforces strict role separation between:
- **Admin/Developer panel** (fetch, verify, approve, publish)
- **User app** (read-only verified information, no direct apply links)

## Core Modules
- `fetch-service.ts`: pulls data from official feeds/APIs.
- `verification-service.ts`: normalizes and scores content.
- `approval-service.ts`: state machine for approve/edit/reject.
- `publish-service.ts`: strips direct links before publishing.
- `auth.ts`: JWT + 2FA support hooks for admin login.

## Security Model
- RBAC roles: `admin`, `editor`, `viewer`, `user`
- Admin endpoints protected by JWT + OTP challenge
- User endpoints expose **published summaries only**
- Source links and raw URLs never returned in user APIs

## APIs
### Admin APIs
- `POST /admin/fetch/run`
- `GET /admin/items?status=fetched|approved|rejected|live`
- `PATCH /admin/items/:id/approve`
- `PATCH /admin/items/:id/reject`
- `PATCH /admin/items/:id/edit`

### User APIs
- `GET /public/jobs`
- `GET /public/schemes`
- `GET /public/items/:id`

All public responses are sanitized and contain only informational fields.
