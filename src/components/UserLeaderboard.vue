<template>
    <div class="user-leaderboard">
      <h3>User Leaderboard</h3>
      <ul>
        <li v-for="(user, index) in users" :key="user.name">
          <div class="rank">{{ index + 1 }}</div>
          <div class="user-info">
            <span class="name">{{ user.name }}</span>
            <span class="points">{{ user.points }} Points</span>
            <span class="correct">{{ user.correct }}% Correct</span>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      users: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  
  <style scoped lang="scss">
  .user-leaderboard {
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
  
        .user-info {
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