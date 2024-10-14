/* eslint-disable vue/no-unused-components */
<template>
  <!-- eslint-disable-next-line vue/no-unused-components -->
  <div class="reports">
    <header class="header">
      <h1>Reports</h1>
      <div>download</div>
    </header>
    <div class="filters">
      <Dropdown :options="timeframes" v-model="selectedTimeframe" />
      <Dropdown :options="peopleOptions" v-model="selectedPeople" />
      <Dropdown :options="topicOptions" v-model="selectedTopic" />
    </div>
    <div class="together">
      <section class="summary">
        <StatCard title="Active Users" :value="activeUsers" />
        <StatCard title="Questions Answered" :value="questionsAnswered" />
        <StatCard title="Av. Session Length" :value="sessionLength" />
        <StatCard
          title="Starting Knowledge"
          :value="startingKnowledge"
          :chartData="knowledgeChartData"
        />
        <StatCard
          title="Current Knowledge"
          :value="currentKnowledge"
          :chartData="knowledgeChartData"
        />
        <StatCard
          title="Knowledge Gain"
          :value="knowledgeGain"
          :chartData="knowledgeChartData"
        />
      </section>

      <section class="charts">
        <ActivityChart :data="activityData" />
      </section>
    </div>
<!-- 
    <section class="topics">
      <WeakestTopics :topics="weakestTopics" />
      <StrongestTopics :topics="strongestTopics" />
    </section>

    <section class="leaderboards">
      <UserLeaderboard :users="userLeaderboard" />
      <GroupsLeaderboard :groups="groupsLeaderboard" />
    </section> -->
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
      timeframes: ["All-time", "Past Month", "Past Week"],
      peopleOptions: ["All", "Users", "Admins"],
      topicOptions: ["All", "Topic 1", "Topic 2"],
      selectedTimeframe: "All-time",
      selectedPeople: "All",
      selectedTopic: "All",

      // Sample Data
      activeUsers: "27/80",
      questionsAnswered: 3298,
      sessionLength: "2m 34s",
      startingKnowledge: "64%",
      currentKnowledge: "86%",
      knowledgeGain: "+34%",
      knowledgeChartData: {}, // Data for knowledge charts
      activityData: {}, // Data for activity chart

      weakestTopics: [
        { name: "Food Safety", correct: 74 },
        { name: "Compliance Basics", correct: 52 },
        { name: "Company Networking", correct: 36 },
      ],
      strongestTopics: [
        { name: "Covid Protocols", correct: 95 },
        { name: "Cyber Security Basics", correct: 92 },
        { name: "Social Media Policies", correct: 89 },
      ],
      userLeaderboard: [
        { name: "Jesse Thomas", points: 637, correct: 98 },
        { name: "Thisal Mathiyazhagan", points: 637, correct: 89 },
      ],
      groupsLeaderboard: [
        { name: "Houston Facility", pointsPerUser: 52, correct: 97 },
        { name: "Test Group", pointsPerUser: 52, correct: 95 },
      ],
    };
  },
};
</script>

<style lang="scss">
.reports {
  padding: 20px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .filters {
    display: flex;
    gap: 10px;
  }
  .together {
   
  }

  .summary,
  .charts,
  .topics,
  .leaderboards {
    margin-top: 20px;
  }

  .summary {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
}
</style>
