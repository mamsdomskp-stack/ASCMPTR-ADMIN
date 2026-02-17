package com.ascmptr.admin

import androidx.lifecycle.ViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow

data class DashboardStats(
    val totalFetched: Int = 0,
    val totalApproved: Int = 0,
    val totalLive: Int = 0,
    val totalRejectedOrExpired: Int = 0,
)

class AdminDashboardViewModel : ViewModel() {
    private val _stats = MutableStateFlow(DashboardStats())
    val stats: StateFlow<DashboardStats> = _stats.asStateFlow()

    fun setStats(newStats: DashboardStats) {
        _stats.value = newStats
    }
}
