<template>
  <div class="stat-card">
    <h3>{{ title }}</h3>
    <p>
      {{ value }}

      <span v-if="total" class="total">/{{ total }}</span>
    </p>
    <!-- Optional chart for the card -->
    <div v-if="chartData" class="chart">
      <img src="@/assets/statChart.svg" alt="Arrow" />

      <!-- <line-chart :data="chartData" /> -->
    </div>
  </div>
</template>

<script>
import LineChart from "@/components/LineChart.vue";

export default {
  props: {
    title: String,
    value: String,
    total: Number,
    chartData: Object,
  },
  components: {
    LineChart,
  },
};
</script>

<style scoped lang="scss">
.stat-card {
  background-color: #fff;
  border-radius: 18px;
  border: 1px solid var(--gray5);
  padding: 13.1px 16px;

  h3 {
    margin-bottom: 25px;
    font-size: 12.93px;
    font-weight: 500;
    line-height: 15.65px;
    letter-spacing: -0.1422363966703415px;
    text-align: left;
  }

  p {
    margin-top: 0px;
    font-size: 22.17px;
    font-weight: 700;
    line-height: 26.83px;
    text-align: left;
  }
  .total {
    color: var(--grey0);
    font-size: 15px;
    font-weight: 700;
    line-height: 26.83px;
  }
}
</style>
