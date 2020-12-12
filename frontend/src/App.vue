<template>
  <div id="the-app">
    <h1>Conference Registration</h1>
    <p v-if="confirmationMessage">{{ confirmationMessage }}</p>
    <form v-else @submit.prevent="register">
      <fieldset>
        <div class="labeled-input">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" v-model="firstName" placeholder="First Name" />
        </div>

        <div class="labeled-input">
          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" v-model="lastName" placeholder="Last Name" />
        </div>
      </fieldset>
      <fieldset>
        <div class="labeled-input">
          <label for="email">Email</label>
          <input id="email" type="text" v-model="email" placeholder="Email" />
        </div>
      </fieldset>
      <fieldset>
        <div class="labeled-input">
          <label for="birthday">Date of Birth</label>
          <input id="birthday" type="date" v-model="birthday" placeholder="1/1/1970" />
        </div>

        <div class="labeled-input">
          <label for="shirt-size">Shirt Size</label>
          <select v-model="shirtSize">
            <option value="s">Small</option>
            <option value="m">Medium</option>
            <option value="l">Large</option>
            <option value="xl">XL</option>
            <option value="xxl">XXL</option>
            <option value="xxxl">XXXL</option>
            <option value="xxxxl">XXXXL</option>
            <option value="xxxxxl">XXXXXL</option>
          </select>
        </div>
      </fieldset>
      <fieldset class="radio-group">
        <p>Are you attending, presenting, or both?</p>
        <div class="labeled-input">
          <label for="attending">Speaking</label>
          <input
            id="attending"
            v-model="attendeeType"
            type="radio"
            name="attendee-type"
            value="attending"
          />
        </div>
        <div class="labeled-input">
          <label for="presenting">Presenting</label>
          <input
            id="presenting"
            v-model="attendeeType"
            type="radio"
            name="attendee-type"
            value="presenting"
          />
        </div>
        <div class="labeled-input">
          <label for="both">Both</label>
          <input
            id="both"
            v-model="attendeeType"
            type="radio"
            name="attendee-type"
            value="both"
          />
        </div>
      </fieldset>
      <fieldset class="checkbox-group">
        <div class="labeled-input">
          <label for="mailing-list">I would like to join the mailing list</label>
          <input id="mailing-list" type="checkbox" value="yes" v-model="mailingList" />
        </div>
      </fieldset>
      <input type="submit" value="Go!" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      birthday: '',
      shirtSize: '',
      attendeeType: '',
      mailingList: false,
      confirmationMessage: '',
    };
  },
  methods: {
    register() {
      fetch('http://localhost:8091/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json())
        .then((response) => {
          this.confirmationMessage = response.message;
        }).catch(() => {
          this.error = 'There was a problem processing your registration.';
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
  .checkbox-group {
    .labeled-input {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
    }
    label, input {
      width: auto;
      margin: 0;
      display: inline-block;
    }
    label {
      margin-right: $baseline;
      font-size: $font-large;
    }
  }
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
  [type=submit] {
    background-color: $primary-color-5;
    border: none;
    padding: $xs $xxl;
    @include button-font;
    cursor: pointer;
    box-shadow: 0 2px 2px $grey-5;
  }
}
</style>
