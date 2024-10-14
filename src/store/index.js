import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);  // Register Vuex with Vue

export default new Vuex.Store({
  state: {
    reports: {
      activeUsers: 27,
      questionsAnswered: 3298,
      avgSessionLength: '2m 34s',
      startingKnowledge: 64,
      currentKnowledge: 86,
      knowledgeGain: 34,
      weakestTopics: ['Food Safety', 'Compliance Basics Procedures', 'Company Networking'],
      strongestTopics: ['Covid Protocols', 'Cyber Security Basics', 'Social Media Policies'],
    },
  },
  getters: {
    getReports(state) {
      return state.reports;
    },
  },
});