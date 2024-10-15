<template>
  <div id="app" class="dashboardLayout">
    <Sidebar />
    <div class="mainContent">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  components: {
    Sidebar,
  },
  created() {
    console.log("one", this.$store); // Check if the store is accessible
    console.log(this.$store.getters.getReports); // Check if the getter is defined and accessible
  },
};
</script>

<style lang="scss" scoped>
.dashboardLayout {
  display: flex;
  gap: 20px;
  background: #f9f9f9;
  max-height: 100vh;
  overflow: hidden;

  .mainContent {
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;

  
  }
}
</style>