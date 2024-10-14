<template>
    <line-chart :chart-data="data" :options="options" />
  </template>
  
  <script>
  import { Line } from 'vue-chartjs';
  
  export default {
    extends: Line,
    props: ['data', 'options'],
  };
  </script>