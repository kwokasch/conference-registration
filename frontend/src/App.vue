<template>
  <div id='the-app'>
    <h1>Conference Registration</h1>
    <p class='message' v-if='confirmationMessage'>{{ confirmationMessage }}</p>
    <Form
        v-else @submit.prevent='register'
        :body='{firstName, lastName, email, birthday, shirtSize, attendeeType, mailingList}'
        :shirtSizes='shirtSizes'
    />
  </div>
</template>

<script>
import Form from '@/components/Form.vue';

export default {
  name: 'App',
  components: {
    Form,
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

      const body = {
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
        body: JSON.stringify({ body }),
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

<style lang='scss'>
</style>
