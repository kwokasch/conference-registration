<template>
  <div class="labeled-select">
    <label :for="slug">{{ label }}</label>
    <select :value="value" @change="$emit('update:value', $event.target.value)">
      <option disabled>Please select an option:</option>
      <option
        v-for="option in options"
        :value="option.value"
        :key="option.value"
      >{{ option.label }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'LabeledSelect',
  props: {
    slug: String,
    label: String,
    value: String,
    options: Array,
  },
};
</script>

<style lang="scss">
@import "@/styles/_sizes.scss";
@import "@/styles/_colors.scss";

.labeled-select {
  width: 100%;
  & + .labeled-select, & + .labeled-input {
    margin-left: $baseline;
  }
  label {
    margin-bottom: $font-small;
    font-size: $font-small;
  }
  select, label {
    display: block;
    width: 100%;
  }
  select {
    padding: $baseline $small;
    border: 1px solid $grey-9;
  }
}
</style>
