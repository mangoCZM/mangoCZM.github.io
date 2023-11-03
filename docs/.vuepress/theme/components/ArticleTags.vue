<template>
  <div class="article-tags">
    <h1>{{ $page.title }}</h1>
    <NiceTime></NiceTime>
    <NiceTag :label="showAuthor" />
  </div>
</template>

<script>
import NiceTag from "./NiceTag.vue";
import NiceTime from "./NiceTime.vue";

export default {
  name: "ArticleTags",
  components: { NiceTag, NiceTime },

  computed: {
    showAuthor() {
      return this.$site.themeConfig.author;
    },
  },
};
</script>

<style lang="stylus" scoped>
.article-tags {
  // padding: 0 2rem;
  margin: 0 auto;
  max-width: 740px;
}
</style>

