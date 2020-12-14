<template>
  <input class="button-submit" type="submit" value="Go!" />
</template>

<script>
export default {
  name: 'ButtonSubmit',
};
</script>

<style lang="scss">
@import "@/styles/_sizes.scss";
@import "@/styles/_colors.scss";
@import "@/styles/_typography.scss";

.button-submit {
  background-color: $primary-color-5;
  border: none;
  padding: $xs $xxl;
  @include button-font;
  cursor: pointer;
  box-shadow: 0 2px 2px $grey-5;
  margin-bottom: $baseline;
}
</style>
