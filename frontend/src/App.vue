<template>
  <div id="the-app">
    <h1>Conference Registration</h1>
    <p class="message"></p>
    <form>
      <fieldset>
        <div class="labeled-input">
          <label for="first-name">First Name</label>
          <input type="text" id="first-name" placeholder="First Name" required="">
        </div>
        <div class="labeled-input">
          <label for="last-name">Last Name</label>
          <input type="text" id="last-name" placeholder="Last Name" required="">
        </div>
      </fieldset>
      <fieldset>
        <div class="labeled-input">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="kyle@sikaeducation.com" required="">
        </div>
      </fieldset>
      <fieldset>
        <div class="labeled-input">
          <label for="birthday">Birthday</label>
          <input type="date" id="birthday" placeholder="1/1/1970" required="">
        </div>
        <div class="labeled-select" isrequired="true">
          <label for="shirt-size">Shirt Size</label>
          <select>
            <option disabled="">Please select an option:</option>
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
          <label for="attending">Attending</label>
          <input type="radio" id="attending" value="attending" name="attendee-type">
        </div>
        <div class="labeled-input">
          <label for="presenting">Presenting</label>
          <input type="radio" id="presenting" value="presenting" name="attendee-type">
        </div>
        <div class="labeled-input">
          <label for="both">Both</label>
          <input type="radio" id="both" value="both" name="attendee-type">
        </div>
      </fieldset>
      <fieldset class="checkbox-group">
        <div class="labeled-input">
          <label for="mailing-list">I would like to join the mailing list</label>
          <input type="checkbox" id="mailing-list" value="yes">
        </div>
      </fieldset>
      <input class="button-submit" type="submit" value="Go!">
      <p class="error-message message"></p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
</style>
