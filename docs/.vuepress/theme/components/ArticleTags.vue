<template>
  <div class="article-tags">
    <h1>{{ $page.title }}</h1>
    <NiceTag :label="showAuthor" />
    <NiceTag :label="showTime" />
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

<style lang="stylus" scoped>
.article-tags{
  padding: 0 2rem;
}
</style>

