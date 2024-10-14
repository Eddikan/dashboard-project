<template>
    <div class="stat-card">
      <h3>{{ title }}</h3>
      <p>{{ value }}</p>
      <!-- Optional chart for the card -->
      <div v-if="chartData" class="chart">
        <line-chart :data="chartData" />
      </div>
    </div>
  </template>
  
  <script>
  import LineChart from '@/components/LineChart.vue';
  
  export default {
    props: {
      title: String,
      value: String,
      chartData: Object
    },
    components: {
      LineChart,
    }
  };
  </script>
  
  <style scoped lang="scss">
  .stat-card {
    background-color: #fff;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  
    h3 {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
    }
  
    p {
      margin-top: 5px;
      font-size: 24px;
    }
  }
  </style>