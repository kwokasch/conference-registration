<template>
  <div id="the-app">
    <h1>Conference Registration</h1>
    <p class="message" v-if="confirmationMessage">{{ confirmationMessage }}</p>
    <!-- Listen for 'registration' emitted, call bodyData when it hears 'registration -->
    <RegistrationForm
        v-else @register="bodyData"
        :shirtSizes="shirtSizes"
        :errorMessage="this.errorMessage"
    />
  </div>
</template>

<script>
import RegistrationForm from '@/components/RegistrationForm.vue';

export default {
  name: 'App',
  components: {
    RegistrationForm,
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
  data() {
    return {
      body: {},
      confirmationMessage: '',
      errorMessage: '',
    };
  },
  methods: {
    bodyData(bodyData) {
      this.body = bodyData;
      this.register();
    },
    register() {
      this.errorMessage = '';

      const registration = {
        firstName: this.body.firstName,
        lastName: this.body.lastName,
        email: this.body.email,
        birthday: this.body.birthday,
        shirtSize: this.body.shirtSize,
        attendeeType: this.body.attendeeType,
        mailingList: this.body.mailingList,
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

<style lang='scss'>
</style>
