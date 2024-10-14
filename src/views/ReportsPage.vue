<template>
  <div class="reports-page">
    <!-- Top Filters (Timeframe, People, Topic) -->
    <div class="filters">
      <select v-model="selectedTimeframe">
        <option>Last 7 Days</option>
        <option>This Month</option>
        <option>This Year</option>
        <option>Custom</option>
      </select>
      <select v-model="selectedPeople">
        <option>All</option>
        <option>Group A</option>
        <option>Group B</option>
      </select>
      <select v-model="selectedTopic">
        <option>All</option>
        <option>Topic A</option>
      </select>
    </div>

    <!-- Summary Stats -->
    <div class="stats-grid">
      <div class="stat-card">Active Users: {{ reports.activeUsers }}</div>
      <div class="stat-card">Questions Answered: {{ reports.questionsAnswered }}</div>
      <div class="stat-card">Avg Session Length: {{ reports.avgSessionLength }}</div>
      <div class="stat-card">Starting Knowledge: {{ reports.startingKnowledge }}%</div>
      <div class="stat-card">Current Knowledge: {{ reports.currentKnowledge }}%</div>
      <div class="stat-card">Knowledge Gain: {{ reports.knowledgeGain }}%</div>
    </div>

    <!-- Charts and Topics Section -->
    <div class="topics-charts">
      <div class="chart-section">
        <h3>Activity</h3>
        <!-- Use vue-chartjs here -->
        <line-chart :data="chartData" />
      </div>

      <div class="topics-section">
        <div class="weakest-topics">
          <h3>Weakest Topics</h3>
          <ul>
            <li v-for="topic in reports.weakestTopics" :key="topic">{{ topic }}</li>
          </ul>
        </div>
        <div class="strongest-topics">
          <h3>Strongest Topics</h3>
          <ul>
            <li v-for="topic in reports.strongestTopics" :key="topic">{{ topic }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import LineChart from '../components/LineChart.vue'; // Your chart component

export default {
  components: {
    LineChart,
  },
  data() {
    return {
      selectedTimeframe: 'This Month',
      selectedPeople: 'All',
      selectedTopic: 'All',
      chartData: {
        // Your chart data setup for chart.js
      },
    };
  },
  computed: {
    ...mapGetters(['getReports']),
    reports() {
      return this.getReports;
    },
  },
};
</script>

<style scoped>
.reports-page {
  padding: 20px;
}

.filters {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 20px;
}

.stat-card {
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.topics-charts {
  display: flex;
  justify-content: space-between;
}

.chart-section {
  width: 60%;
}

.topics-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 35%;
}

.weakest-topics, .strongest-topics {
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

</style>