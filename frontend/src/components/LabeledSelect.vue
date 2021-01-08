<template>
  <div class="labeled-select" :isrequired="isRequired">
    <label :for="slug">{{ label }}</label>
    <select :value="value" @change="$emit('update:value', $event.target.value)">
      <option disabled=''>{{ optionLabel }}</option>
      <option
          v-for="shirtSize in shirtSizes"
          :key="shirtSize.value"
          :value="shirtSize.value"
      >{{ shirtSize.label }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'LabeledSelect',
  props: {
    slug: String,
    value: String,
    label: String,
    optionLabel: String,
    isRequired: Boolean,
    shirtSizes: Array,
  },
};
</script>

<style lang='scss'>
</style>
