<template>
    <div class="groups-leaderboard">
      <h3>Groups Leaderboard</h3>
      <ul>
        <li v-for="(group, index) in groups" :key="group.name">
          <div class="rank">{{ index + 1 }}</div>
          <div class="group-info">
            <span class="name">{{ group.name }}</span>
            <span class="points">{{ group.pointsPerUser }} Points/User</span>
            <span class="correct">{{ group.correct }}% Correct</span>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      groups: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  
  <style scoped lang="scss">
  .groups-leaderboard {
    background-color: #fff;
    padding: 15px;
    border-radius: 8px;
  
    h3 {
      font-size: 16px;
      margin-bottom: 10px;
    }
  
    ul {
      list-style: none;
      padding: 0;
  
      li {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
  
        .rank {
          font-weight: bold;
          margin-right: 10px;
        }
  
        .group-info {
          display: flex;
          flex-direction: column;
  
          .name {
            font-weight: 600;
          }
  
          .points, .correct {
            font-size: 12px;
            color: #888;
          }
        }
      }
    }
  }
  </style>