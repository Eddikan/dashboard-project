<template>
  <div></div>
</template>

<script>
export default {

  mounted() {
    // Redirect to the Reports page when the component is mounted
    this.$router.push({ name: 'Reports' });
  },
};
</script>

<style scoped></style>
