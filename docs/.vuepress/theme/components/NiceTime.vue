<template>
  <div class="nice-time">
    <TimeIcon />
    <span class="time-label">{{showTime}}</span>
  </div>
</template>

<script>
import TimeIcon from "./icons/TimeIcon.vue";

export default {
  name: "NiceTime",

  components: { TimeIcon },

  computed: {
    showTime() {
      return new Date(this.$page.lastUpdatedTimestamp)
        .toString()
        .split(" ")
        .slice(0, 4)
        .join(" ");
    },
  },
};
</script>

<style scoped lang="stylus">
.nice-time {
  margin-bottom: 10px;
  color: black;
  font-size: 0.85rem;
  font-weight: bold;
  display: flex;
  align-items: center;

  .time-label {
    margin-left: 5px;
    font-family: cursive;
  }
}
</style>
