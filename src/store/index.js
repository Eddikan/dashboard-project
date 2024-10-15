import Vue from "vue";
import Vuex from "vuex";
import weakestImage1 from "@/assets/topics/weakestImage1.svg";
import weakestImage2 from "@/assets/topics/weakestImage2.svg";
import weakestImage3 from "@/assets/topics/weakestImage3.svg";
import strongestImage1 from "@/assets/topics/strongestTopic1.svg";
import strongestImage2 from "@/assets/topics/strongestTopic2.svg";
import strongestImage3 from "@/assets/topics/strongestTopic3.svg";
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

    weakestTopics: [
      {
        image: weakestImage1,
        name: "Food Safety",
        correct: 74,
      },
      {
        image: weakestImage2,

        name: "Compliance Basics",
        correct: 52,
      },
      {
        image: weakestImage3,

        name: "Company Networking",
        correct: 36,
      },
    ],
    strongestTopics: [
      {
        image: strongestImage1,

        name: "Covid Protocols",
        correct: 95,
      },
      {
        image: strongestImage2,

        name: "Cyber Security Basics",
        correct: 92,
      },
      {
        image: strongestImage3,

        name: "Social Media Policies",
        correct: 89,
      },
    ],
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
    getWeakestTopics(state) {
      return state.weakestTopics;
    },
    getStrongestTopics(state) {
      return state.strongestTopics;
    },
  },
});
