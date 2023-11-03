<template>
  <div>
    <h1>{{ $page.title }}</h1>
    <NiceTag :label="showTime" />
    <NiceTag :label="showAuthor" />
  </div>
</template>

<script>
import NiceTage from "./NiceTag.vue";
export default {
  name: "ArticleTags",
  components: { NiceTage },

  computed: {
    showTime() {
      return new Date(this.$page.lastUpdatedTimestamp)
        .toString()
        .split(" ")
        .slice(0, 4)
        .join(" ");
    },

    showAuthor() {
      return this.$site.themeConfig.author;
    },
  },
};
</script>

