<template>
  <div class="weakest-topics">
    <h3>Weakest Topics</h3>
    <ul>
      <li v-for="topic in topics" :key="topic.name">
        <img :src="topic.image" alt="Arrow" />

        <div class="content">
          <div class="topic-name">{{ topic.name }}</div>
          <div class="progress-bar">
            <div class="progress" :style="{ width: topic.correct + '%' }"></div>
          </div>
        </div>

        <span class="correct">{{ topic.correct }}% Correct</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    topics: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.weakest-topics {
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
      .content {
        width: 60%;
        margin: 0 14.62px;
      }
      .topic-name {
        flex: 1;
      }

      .progress-bar {
        background-color: #f0f0f0;
        border-radius: 5px;
        width: 100%;

        height: 8px;

        .progress {
          height: 100%;
          background-color: #ff6f61;
          border-radius: 5px;
        }
      }

      .correct {
        color: #888;
      }
    }
  }
}
</style>
