<template>
  <div>recommend</div>
</template>

<script>
import { getRecommend } from "@/service/recommend.js";

export default {
  name: "recommend",
  data() {
    return {};
  },
  created() {
    this.getRecommendData();
  },
  methods: {
    async getRecommendData() {
      let res = await getRecommend();
      console.log(res);
    },
  },
};
</script>

<style></style>
