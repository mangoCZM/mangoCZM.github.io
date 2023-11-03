<template>
  <div class="nice-tag">
    <span>
      {{ label }}
    </span>
  </div>
</template>

<script>
export default {
  name: "NiceTag",

  props: {
    label: String,
  },
};
</script>

<style scoped lang="stylus">
$color = #767676;
$bgColor = #ededed;

$bgColor-hover = #d05dd2

.nice-tag {
  background-color: $bgColor;
  border-radius: 3px 0 0 3px;
  padding: 0 20px 0 23px;
  position: relative;
  text-decoration: none;
  height: 26px;
  line-height: 26px;
  display: inline-block;
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 8px;
  font-family: cursive;
  cursor: pointer;

  &:hover {
    background-color: $bgColor-hover;

    span {
      color: #fff;
    }

    &:after {
      border-left: 10px solid $bgColor-hover;
    }
  }

  span {
    color: $color;
    transition: color 0.2s;
  }

  &:before {
    position: absolute;
    left: 10px;
    top: 10px;
    background: #fff;
    border-radius: 50%;
    box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
    content: '';
    height: 6px;
    width: 6px;
  }

  &:after {
    position: absolute;
    right: 0;
    top: 0;
    background: #fff;
    border-bottom: 13px solid transparent;
    border-left: 10px solid #ededed;
    border-top: 13px solid transparent;
    content: '';
  }
}
</style>
