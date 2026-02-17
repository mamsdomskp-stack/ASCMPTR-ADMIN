package com.ascmptr.user

object PublicPolicy {
    const val DISCLAIMER = "This app is not affiliated with any government authority. Information is collected from publicly available official sources."

    fun isCompliant(payload: Map<String, Any?>): Boolean {
        val forbiddenKeys = setOf("applicationLink", "sourceUrl", "externalRedirect")
        return payload.keys.none { it in forbiddenKeys }
    }
}
