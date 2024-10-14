<template>
  <div class="dropdown">
    <div @click="toggleDropdown" class="dropdown-selected">
      {{ selected || "Select" }}
    </div>
    <div v-if="open" class="blur" @click="open = false"></div>
    <ul v-if="open" class="dropdown-options">
      <li v-for="option in options" :key="option" @click="selectOption(option)">
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selected: this.value,
      open: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.open = !this.open;
    },
    selectOption(option) {
      this.selected = option;
      this.open = false;
      this.$emit("input", option);
    },
  },
};
</script>

<style scoped lang="scss">
.dropdown {
  position: relative;
  .blur {
    background: transparent !important;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
  .dropdown-selected {
    background-color: #f5f5f5;
    padding: 10px;
    cursor: pointer;
  }

  .dropdown-options {
    position: absolute;
    background-color: #fff;
    border: 1px solid #ccc;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 200px;

    li {
      padding: 10px;
      cursor: pointer;

      &:hover {
        background-color: #eee;
      }
    }
  }
}
</style>
