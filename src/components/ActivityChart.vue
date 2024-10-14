<template>
    <div class="activity-chart">
      <bar-chart :data="data" />
    </div>
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs';
  
  export default {
    props: {
      data: Object,
    },
    components: {
      BarChart: Bar
    }
  };
  </script>
  
  <style scoped lang="scss">
  .activity-chart {
    background-color: #fff;
    padding: 15px;
    border-radius: 8px;
  }
  </style>