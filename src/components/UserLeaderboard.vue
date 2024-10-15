<template>
  <div class="leaderboard-container">
    <h3 class="leaderboard-title">User Leaderboard</h3>
    <ul class="leaderboard-list">
      <li
        v-for="(user, index) in users"
        :key="user.id"
        class="leaderboard-item"
      >
        <div class="leaderboard-left">
          <img :src="user.avatar" class="avatar" alt="user avatar" />
          <div class="user-info">
            <span class="user-name">{{ user.name }}</span>
            <span class="user-points">{{ user.points }} Points - {{ user.correctPercentage }}% Correct</span>
          </div>
        </div>
        <div class="leaderboard-right">
          <span class="rank">{{ index + 1 }}</span>
          <span :class="user.rankChange > 0 ? 'rank-up' : 'rank-down'">
            <svg v-if="user.rankChange !== 0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path :d="user.rankChange > 0 ? 'M7 14l5-5 5 5H7z' : 'M7 10l5 5 5-5H7z'" fill="currentColor"/>
            </svg>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: 1,
          name: 'Jesse Thomas',
          avatar: 'https://via.placeholder.com/40',
          points: 637,
          correctPercentage: 98,
          rankChange: 1,
        },
        {
          id: 2,
          name: 'Thisal Mathiyazhagan',
          avatar: 'https://via.placeholder.com/40',
          points: 637,
          correctPercentage: 89,
          rankChange: -1,
        },
     
      ],
    };
  },
};
</script>

<style scoped>
.leaderboard-container {
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  width:-webkit-fill-available;
  margin: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.leaderboard-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #333;
}

.leaderboard-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.leaderboard-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}

.leaderboard-item:last-child {
  border-bottom: none;
}

.leaderboard-left {
  display: flex;
  align-items: center;
}

.avatar {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 12px;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: 600;
  color: #333;
}

.user-points {
  font-size: 14px;
  color: #777;
}

.leaderboard-right {
  display: flex;
  align-items: center;
}

.rank {
  font-size: 20px;
  margin-right: 8px;
}

.rank-up {
  color: green;
}

.rank-down {
  color: red;
}

@media (max-width: 600px) {
  .leaderboard-container {
    padding: 12px;
  }

  .leaderboard-item {
    padding: 8px 0;
  }

  .avatar {
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }

  .rank {
    font-size: 16px;
  }

  .user-name {
    font-size: 14px;
  }

  .user-points {
    font-size: 12px;
  }
}
</style>