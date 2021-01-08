<template>
  <input class='button-submit' :type='type' :value='value'>
</template>

<script>
export default {
  name: 'ButtonSubmit',
  props: {
    type: String,
    value: String,
  },
};
</script>

<style lang='scss'>
</style>
