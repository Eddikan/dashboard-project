import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex); // Register Vuex with Vue

export default new Vuex.Store({
  state: {
    reports: {
      activeUsers: 27,
      questionsAnswered: 3298,
      avgSessionLength: "2m 34s",
      startingKnowledge: "64%",
      knowledgeChartData: {}, // Data for knowledge charts

      currentKnowledge: "86%",
      knowledgeGain: "+34%",
      weakestTopics: [
        "Food Safety",
        "Compliance Basics Procedures",
        "Company Networking",
      ],
      strongestTopics: [
        "Covid Protocols",
        "Cyber Security Basics",
        "Social Media Policies",
      ],
    },
    selectedTimeFrame: "All-time",
    selectedPeople: "All",
    selectedTopic: "All",
    timeFrames: ["All-time", "Past Month", "Past Week"],
    peopleOptions: ["All", "Users", "Admins"],
    topicOptions: ["All", "Topic 1", "Topic 2"],
  },
  getters: {
    getReports(state) {
      return state.reports;
    },
    getSelectedTimeFrame(state) {
      return state.selectedTimeFrame;
    },
    getSelectedPeople(state) {
      return state.selectedPeople;
    },
    getSelectedTopic(state) {
      return state.selectedTopic;
    },
    getTimeFrames(state) {
      return state.timeFrames;
    },
    getPeopleOptions(state) {
      return state.peopleOptions;
    },
    getTopicOptions(state) {
      return state.topicOptions;
    },
  },
});
