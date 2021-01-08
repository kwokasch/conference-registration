<template>
  <p class="error-message message">{{ message }}</p>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: {
    message: String,
  },
};
</script>

<style lang='scss'>
</style>
