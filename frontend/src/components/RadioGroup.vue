<template>
  <fieldset class="radio-group">
    <p>{{ label }}?</p>
    <!-- Pass in actual component via the slot -->
    <!-- Slots are a mechanism for Vue components that allows you to compose your components in -->
    <!-- a way other than the strict parent-child relationship. -->
    <!-- Slots give you an outlet to place content in new places or make components more generic.-->
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
