<template>
  <fieldset class="radio-group">
    <p>{{ label }}?</p>
    <slot></slot>
  </fieldset>
</template>

<script>
export default {
  name: 'RadioGroup',
  props: {
    label: String,
  },
};
</script>

<style lang='scss'>
</style>
