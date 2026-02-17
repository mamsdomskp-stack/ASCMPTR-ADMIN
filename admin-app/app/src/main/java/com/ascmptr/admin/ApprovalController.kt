package com.ascmptr.admin

enum class AdminAction {
    APPROVE,
    EDIT,
    REJECT
}

data class AdminListing(
    val id: String,
    val title: String,
    val sourceWebsite: String,
    val officialApplyLink: String,
    val details: String,
)

class ApprovalController {
    fun applyAction(listing: AdminListing, action: AdminAction): String {
        return when (action) {
            AdminAction.APPROVE -> "${listing.id}: approved and ready to publish"
            AdminAction.EDIT -> "${listing.id}: sent to editor mode"
            AdminAction.REJECT -> "${listing.id}: rejected"
        }
    }
}
