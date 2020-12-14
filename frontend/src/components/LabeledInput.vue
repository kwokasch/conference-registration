<template>
  <div class="labeled-input">
    <label for="first-name">First Name</label>
    <input id="first-name" type="text" v-model="firstName" placeholder="First Name" />
  </div>
</template>

<script>
export default {
  name: 'LabeledInput',
};
</script>

<style lang="scss">
@import "@/styles/_sizes.scss";
@import "@/styles/_colors.scss";

.labeled-input {
  width: 100%;
  & + .labeled-input {
    margin-left: $baseline;
  }
  label {
    margin-bottom: $font-small;
    font-size: $font-small;
  }
  input, select, label {
    display: block;
    width: 100%;
  }
  input, select {
    padding: $baseline $small;
    border: 1px solid $grey-9;
  }
}
</style>
