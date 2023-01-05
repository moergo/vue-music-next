<template>
  <div>
    <header-vue></header-vue>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
import headerVue from "./components/header/header.vue";
import tab from "./components/tab/tab.vue";

export default {
  components: {
    headerVue,
    tab,
  },
};
</script>

<style lang="scss">
div {
  background-color: $color-background;
}
</style>
