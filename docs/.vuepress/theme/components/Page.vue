<template>
  <main class="page">
    <slot name="top" />
    <ArticleTags></ArticleTags>
    <Content class="theme-default-content" />
    <PageEdit />
    <PageNav v-bind="{ sidebarItems }" />
    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";
import ArticleTags from "@theme/components/ArticleTags.vue";

export default {
  components: { PageEdit, PageNav, ArticleTags },
  props: ["sidebarItems"],
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl';

.page {
  padding-bottom: 2rem;
  display: block;
}
</style>
