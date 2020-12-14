<template>
  <fieldset class="checkbox-group">
    <slot></slot>
  </fieldset>
</template>

<script>
export default {
  name: 'CheckboxGroup',
};
</script>

<style lang="scss">
@import "@/styles/_sizes.scss";

.checkbox-group {
  .labeled-input {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }
  label, input {
    width: auto;
    margin: 0;
    display: inline-block;
  }
  label {
    margin-right: $baseline;
    font-size: $font-large;
  }
}
</style>
