<template>
  <div class="chart-wrapper">
    <!-- Activity Title and Month/Year Dropdown -->
    <div class="chart-header">
      <h3>Activity</h3>
      <select v-model="viewType" @change="updateChart" class="dropdown">
        <option value="month">Month</option>
        <option value="year">Year</option>
      </select>
    </div>

    <!-- Chart -->
    <div class="chart-container">
      <Bar
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
      />
    </div>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      viewType: 'month', // Default view is month
      monthData: [120, 150, 300, 100, 200, 220, 180, 210, 230, 190, 290, 340], // Mock data for months
      yearData: [1500, 2000, 1800, 2200], // Mock data for years (quarters or total yearly)
      chartData: {
        labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ], // Default to months
        datasets: [
          {
            label: 'Activity',
            data: [120, 150, 300, 100, 200, 220, 180, 210, 230, 190, 290, 340], // Default to month data
            backgroundColor: (context) => {
              const ctx = context.chart.ctx;
              const gradient = ctx.createLinearGradient(0, 0, 0, 400);
              gradient.addColorStop(0, 'rgba(83, 155, 255, 1)');
              gradient.addColorStop(1, 'rgba(83, 155, 255, 0.1)');
              return gradient;
            },
            borderRadius: 8,
            borderSkipped: false,
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false, 
        scales: {
          x: {
            grid: {
              display: false, 
            },
            ticks: {
              font: {
                size: 12,
                weight: '500',
                family: 'Inter, sans-serif',
              },
              color: '#6B7280',
            },
          },
          y: {
            grid: {
              color: '#E5E5E5',
              borderDash: [5], 
            },
            ticks: {
              beginAtZero: true,
              font: {
                size: 12,
                weight: '500',
                family: 'Inter, sans-serif',
              },
              color: '#6B7280',
            },
          }
        },
        plugins: {
          legend: {
            display: false, 
          },
          tooltip: {
            backgroundColor: '#FFF',
            titleColor: '#000',
            bodyColor: '#000',
            borderColor: '#E5E5E5',
            borderWidth: 1,
            padding: 10,
            displayColors: false,
          },
        },
      },
    }
  },
  methods: {
    updateChart() {
      if (this.viewType === 'month') {
        this.chartData.labels = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
        this.chartData.datasets[0].data = this.monthData; // Set the month data
      } else if (this.viewType === 'year') {
        this.chartData.labels = [ 'Q1', 'Q2', 'Q3', 'Q4' ]; // Example: quarterly data for year view
        this.chartData.datasets[0].data = this.yearData; // Set the year data
      }
    }
  }
}
</script>

<style scoped>
.chart-wrapper {
  width: 90%;
  padding: 24px;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

h3 {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: #1F2937; /* Dark text color */
}

.dropdown {
  padding: 10px;
  border: 1px solid #E5E5E5;
  border-radius: 8px;
  background-color: white;
  font-size: 14px;
  font-weight: 500;
  color: #374151; /* Darker text for the dropdown */
  width: 100px; /* Adjust width as needed */
}

.chart-container {
  width: 100%;
  height: 250px;
}
</style>