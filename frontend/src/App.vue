<template>
  <div id="the-app">
    <h1>Conference Registration</h1>
    <p class="message" v-if="confirmationMessage">{{ confirmationMessage }}</p>
    <form v-else @submit.prevent="register">
      <fieldset>
        <LabeledInput
          label="First Name"
          slug="first-name"
          placeholder="First Name"
          :isRequired="true"
          v-model:value="firstName"
        />
        <LabeledInput
          label="Last Name"
          slug="last-name"
          placeholder="Last Name"
          :isRequired="true"
          v-model:value="lastName"
        />
      </fieldset>
      <fieldset>
        <LabeledInput
          label="Email"
          slug="email"
          type="email"
          :isRequired="true"
          placeholder="kyle@sikaeducation.com"
          v-model:value="email"
        />
      </fieldset>
      <fieldset>
        <LabeledInput
          label="Birthday"
          slug="birthday"
          type="date"
          :isRequired="true"
          placeholder="1/1/1970"
          v-model:value="birthday"
        />

        <LabeledSelect
          label="Shirt Size"
          slug="shirt-size"
          :options="shirtSizes"
          :isRequired="true"
          v-model:value="shirtSize"
        />
      </fieldset>
      <RadioGroup prompt="Are you attending, presenting, or both?">
        <LabeledInput
          label="Attending"
          slug="attending"
          type="radio"
          name="attendee-type"
          value="attending"
          v-model:value="attendeeType"
        />
        <LabeledInput
          label="Presenting"
          slug="presenting"
          type="radio"
          name="attendee-type"
          value="presenting"
          v-model:value="attendeeType"
        />
        <LabeledInput
          label="Both"
          slug="both"
          type="radio"
          name="attendee-type"
          value="both"
          v-model:value="attendeeType"
        />
      </RadioGroup>
      <CheckboxGroup>
        <LabeledInput
          label="I would like to join the mailing list"
          slug="mailing-list"
          type="checkbox"
          value="yes"
          v-model:value="mailingList"
        />
      </CheckboxGroup>
      <ButtonSubmit />
      <p v-if="errorMessage" class="error-message message">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
import LabeledInput from '@/components/LabeledInput.vue';
import LabeledSelect from '@/components/LabeledSelect.vue';
import ButtonSubmit from '@/components/ButtonSubmit.vue';
import CheckboxGroup from '@/components/CheckboxGroup.vue';
import RadioGroup from '@/components/RadioGroup.vue';

export default {
  name: 'App',
  components: {
    LabeledInput,
    LabeledSelect,
    ButtonSubmit,
    CheckboxGroup,
    RadioGroup,
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
      confirmationMessage: '',
      errorMessage: '',
    };
  },
  computed: {
    shirtSizes() {
      return [{
        value: 's',
        label: 'Small',
      }, {
        value: 'm',
        label: 'Medium',
      }, {
        value: 'l',
        label: 'Large',
      }, {
        value: 'xl',
        label: 'XL',
      }, {
        value: 'xxl',
        label: 'XXL',
      }, {
        value: 'xxxl',
        label: 'XXXL',
      }, {
        value: 'xxxxl',
        label: 'XXXXL',
      }, {
        value: 'xxxxxl',
        label: 'XXXXXL',
      }];
    },
  },
  methods: {
    register() {
      this.errorMessage = '';

      const registration = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        birthday: this.birthday,
        shirtSize: this.shirtSize,
        attendeeType: this.attendeeType,
        mailingList: this.mailingList,
      };

      fetch('http://localhost:8091/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ registration }),
      }).then((response) => response.json())
        .then((response) => {
          if (response.error) throw new Error(response.error);
          this.confirmationMessage = response.message;
        }).catch((error) => {
          this.errorMessage = error.message;
        });
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/_reset.scss";
@import "@/styles/_sizes.scss";
@import "@/styles/_colors.scss";

#the-app {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: $xl;
  h1 {
    @include heading-font-1;
  }
  fieldset {
    display: flex;
    justify-content: space-between;
    margin-bottom: $large;
  }
  .error-message {
    color: $failure-color-5;
  }
  .message {
    max-width: 600px;
  }
}
</style>
