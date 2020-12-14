<template>
  <div class="labeled-input">
    <label :for="slug">{{label}}</label>
    <input
      :type="type"
      :id="slug"
      :value="value"
      :placeholder="placeholder"
      :name="name"
      :required="isRequired"
      @input="$emit('update:value', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'LabeledInput',
  props: {
    slug: String,
    label: String,
    value: String,
    name: String,
    isRequired: Boolean,
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/_sizes.scss";
@import "@/styles/_colors.scss";

.labeled-input {
  width: 100%;
  & + .labeled-input, & + .labeled-select {
    margin-left: $baseline;
  }
  label {
    margin-bottom: $font-small;
    font-size: $font-small;
  }
  input, label {
    display: block;
    width: 100%;
  }
  input {
    padding: $baseline $small;
    border: 1px solid $grey-9;
  }
}
</style>
