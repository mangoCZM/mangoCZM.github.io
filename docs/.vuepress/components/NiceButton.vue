<template>
  <div class="nice-button">
    {{ label }}
  </div>
</template>

<script>
export default {
  name: "NiceButton",

  props: {
    label: String,
  },
};
</script>

<style scoped lang="stylus">
.nice-button {
  padding: 4px 8px;
  border-radius: 8px;
  border: 1px solid red;
  color: red;
  display: inline-block;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: #fff;
    background: red;
  }
}
</style>
