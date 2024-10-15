<template>
  <div id="app" class="dashboardLayout">
    <Sidebar />
    <router-view></router-view>
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

<style>
.dashboardLayout {
  display: flex;
  gap: 20px;
  background: #F9F9F9;
  max-height: 100vh;
  overflow: hidden;
}
</style>
