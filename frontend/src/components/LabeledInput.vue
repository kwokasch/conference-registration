<template>
  <div class='labeled-input'>
    <label :for='slug'>{{ label }}</label>
    <input
        :type='type'
        :id='slug'
        :placeholder='placeholder'
        :value='value'
        :name='name'
        :required='isRequired'
        @input="$emit('update:value', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'LabeledInput',
  props: {
    slug: String,
    label: String,
    type: String,
    placeholder: String,
    value: String,
    name: String,
    isRequired: Boolean,
  },
};
</script>

<style lang='scss'>
</style>
