<template>
  <fieldset class="radio-group">
    <p>{{ prompt }}</p>
    <slot></slot>
  </fieldset>
</template>

<script>
export default {
  name: 'RadioGroup',
  props: {
    prompt: String,
  },
};
</script>

<style lang="scss">
@import "@/styles/_sizes.scss";
@import "@/styles/_colors.scss";

.radio-group {
  display: flex;
  flex-flow: column nowrap;
  background-color: $grey-9;
  padding: $baseline $xl;
  > .labeled-input {
    max-width: 250px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: $baseline;
    & + .labeled-input {
      margin-left: 0;
    }
    > label, > input {
      margin: 0;
    }
    > label {
      font-size: $font-large;
    }
    > input {
      justify-self: start;
      width: auto;
    }
  }
}
</style>
