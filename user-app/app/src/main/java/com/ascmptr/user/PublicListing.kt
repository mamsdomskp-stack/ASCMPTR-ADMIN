package com.ascmptr.user

data class PublicListing(
    val id: String,
    val title: String,
    val ministry: String,
    val eligibility: String,
    val importantDates: String,
    val selectionProcess: String,
    val summary: String,
    val status: ListingStatus,
)

enum class ListingStatus {
    NEW,
    UPCOMING,
    LAST_DATE_SOON,
    CLOSED,
}
