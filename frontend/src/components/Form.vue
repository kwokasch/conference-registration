<template>
  <form>
    <fieldset>
      <LabeledInput
          slug='first-name'
          label='First Name'
          type='text'
          placeholder='First Name'
          :isRequired='true'
          v-model:value='firstName'
          @input="$emit('update:value', $event.target.value)"
      />
      <LabeledInput
          slug='last-name'
          label='Last Name'
          type='text'
          placeholder='Last Name'
          :isRequired='true'
          v-model:value='lastName'
          @input="$emit('update:value', $event.target.value)"
      />
    </fieldset>
    <fieldset>
      <LabeledInput
          slug='email'
          label='Email'
          type='email'
          placeholder='kyle@sikaeducation.com'
          :isRequired='true'
          v-model:value='email'
          @input="$emit('update:value', $event.target.value)"
      />
    </fieldset>
    <fieldset>
      <LabeledInput
          slug='birthday'
          label='Birthday'
          type='date'
          placeholder='1/1/1970'
          :isRequired='true'
          v-model:value='birthday'
          @input="$emit('update:value', $event.target.value)"
      />
      <LabeledSelect
          slug='shirt-size'
          label='Shirt Size'
          optionLabel='Please select an option:'
          :shirtSizes='shirtSizes'
          @change="$emit('update:value', $event.target.value)"
      />
    </fieldset>
    <RadioGroup label='Are you attending, presenting, or both?'>
      <LabeledInput
          slug='attending'
          label='Attending'
          type='radio'
          value='attending'
          name='attending-type'
          :isRequired='true'
          v-model:value='attendeeType'
          @input="$emit('update:value', $event.target.value)"
      />
      <LabeledInput
          slug='presenting'
          label='Presenting'
          type='radio'
          value='presenting'
          name='attending-type'
          :isRequired='true'
          v-model:value='attendeeType'
          @input="$emit('update:value', $event.target.value)"
      />
      <LabeledInput
          slug='both'
          label='Both'
          type='radio'
          value='both'
          name='attending-type'
          :isRequired='true'
          v-model:value='attendeeType'
          @input="$emit('update:value', $event.target.value)"
      />
    </RadioGroup>
    <CheckboxGroup>
      <LabeledInput
          slug='mailing-list'
          label='I would like to join the mailing list'
          type='checkbox'
          value='yes'
          v-model:value='mailingList'
          @input="$emit('update:value', $event.target.value)"
      />
    </CheckboxGroup>
    <ButtonSubmit
        type='submit'
        value='Go!'
    />
    <ErrorMessage :errorMessage='errorMessage'/>
  </form>
</template>

<script>
import LabeledInput from '@/components/LabeledInput.vue';
import LabeledSelect from '@/components/LabeledSelect.vue';
import RadioGroup from '@/components/RadioGroup.vue';
import CheckboxGroup from '@/components/CheckboxGroup.vue';
import ButtonSubmit from '@/components/ButtonSubmit.vue';
import ErrorMessage from '@/components/ErrorMessage.vue';

export default {
  name: 'Form',
  components: {
    LabeledInput,
    LabeledSelect,
    RadioGroup,
    CheckboxGroup,
    ButtonSubmit,
    ErrorMessage,
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      birthday: '',
      shirtSize: '',
      attendeeType: 'both',
      mailingList: false,
    };
  },
  props: {
    shirtSizes: Array,
    errorMessage: String,
  },
};
</script>

<style lang='scss'>
</style>
