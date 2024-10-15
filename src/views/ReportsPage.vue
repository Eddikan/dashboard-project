<template>
  <div class="reports">
    <header class="header">
      <h1>Reports</h1>
      <div class="downloadCTA">
        <img src="@/assets/download.svg" alt="Arrow" />
        Download
      </div>
    </header>
    <div class="filters">
      <Dropdown :options="timeFrames" v-model="selectedTimeFrame" />
      <Dropdown :options="peopleOptions" v-model="selectedPeople" />
      <Dropdown :options="topicOptions" v-model="selectedTopic" />
    </div>
    <div class="together">
      <section class="summary">
        <StatCard
          title="Active Users"
          :value="reports.activeUsers"
          :total="80"
        />
        <StatCard
          title="Questions Answered"
          :value="reports.questionsAnswered"
        />
        <StatCard
          title="Av. Session Length"
          :value="reports.avgSessionLength"
        />
        <StatCard
          title="Starting Knowledge"
          :value="reports.startingKnowledge"
          :chartData="reports.knowledgeChartData"
        />
        <StatCard
          title="Current Knowledge"
          :value="reports.currentKnowledge"
          :chartData="reports.knowledgeChartData"
        />
        <StatCard
          title="Knowledge Gain"
          :value="reports.knowledgeGain"
          :chartData="reports.knowledgeChartData"
        />
      </section>

      <section class="charts">
        <ActivityChart />
      </section>
    </div>

    <section class="together">
      <WeakestTopics :topics="weakestTopics" />
      <StrongestTopics :topics="strongestTopics" />
    </section>

    <section class="together">
      <UserLeaderboard />
      <GroupsLeaderboard :groups="groupsLeaderboard" />
    </section>
  </div>
</template>

<script>
import Dropdown from "@/components/Dropdown.vue";
import StatCard from "@/components/StatCard.vue";
import ActivityChart from "@/components/ActivityChart.vue";
import WeakestTopics from "@/components/WeakestTopics.vue";
import StrongestTopics from "@/components/StrongestTopics.vue";
import UserLeaderboard from "@/components/UserLeaderboard.vue";
import GroupsLeaderboard from "@/components/GroupsLeaderboard.vue";

import { mapGetters } from "vuex";
export default {
  components: {
    Dropdown,
    StatCard,
    ActivityChart,
    WeakestTopics,
    StrongestTopics,
    UserLeaderboard,
    GroupsLeaderboard,
  },
  data() {
    return {
      strongestTopics: [
        { name: "Covid Protocols", correct: 95 },
        { name: "Cyber Security Basics", correct: 92 },
        { name: "Social Media Policies", correct: 89 },
      ],

      groupsLeaderboard: [
        { name: "Houston Facility", pointsPerUser: 52, correct: 97 },
        { name: "Test Group", pointsPerUser: 52, correct: 95 },
      ],
    };
  },
  computed: {
    ...mapGetters([
      "getReports",
      "getSelectedTimeFrame",
      "getSelectedPeople",
      "getSelectedTopic",
      "getTimeFrames",
      "getPeopleOptions",
      "getTopicOptions",
      "getWeakestTopics",
    ]),
    reports() {
      return this.getReports;
    },
    selectedTimeFrame() {
      return this.getSelectedTimeFrame;
    },
    selectedPeople() {
      return this.getSelectedPeople;
    },
    selectedTopic() {
      return this.getSelectedTopic;
    },
    timeFrames() {
      return this.getTimeFrames;
    },
    peopleOptions() {
      return this.getPeopleOptions;
    },
    topicOptions() {
      return this.getTopicOptions;
    },
    weakestTopics() {
      return this.getWeakestTopics;
    },
  },
};
</script>

<style lang="scss">
.reports {
  padding: 20px;
  width: 95%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--gray7);
    margin-bottom: 26px;
    h1 {
      font-size: 22.17px;
      font-weight: 700;
      line-height: 26.83px;
      text-align: left;
    }
    .downloadCTA {
      display: flex;
      align-items: center;
      gap: 2px;
      font-weight: 600;
      font-size: 13px;
      color: var(--gray6);
      cursor: pointer;
    }
  }

  .filters {
    display: flex;
    gap: 10px;
  }

  .together {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 22px;
    margin-top: 15px;
  }

  .summary {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  @media (max-width: 1024px) {
    .together {
      grid-template-columns: 1fr;
    }

    .summary {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 600px) {
    .header {
      flex-direction: column;
      h1 {
        font-size: 18px;
      }
      .downloadCTA {
        font-size: 12px;
      }
    }

    .filters {
      flex-direction: column;
    }

    .together {
      grid-template-columns: 1fr;
    }

    .summary {
      grid-template-columns: 1fr;
      gap: 8px;
    }
  }
}
</style>